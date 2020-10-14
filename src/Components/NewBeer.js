import React, { Component } from 'react'
import Header from './Header'
import IronBeersAPI from '../api/IronBeersAPI'

export default class NewBeer extends Component {
    
        state = {
             name: '',
             tagline: '',
             description: '',
             first_brewed: '',
             brewwers_tips: '',
             attenuation_level: '',
             contributed_by: '',
        }
    
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSumbit = (event) => {
        event.preventDefault();
        
        IronBeersAPI
            .createNewBeer(this.state)
            .then((apiResponse) => {
            console.log(apiResponse);
            this.props.history.push('/beers');
            })
            .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <Header />
                <form className='new-beer-form' onSubmit={this.handleSumbit}>
                    <label>
                        Name:
                        <br/>
                        <input type='text' name={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Tagline:
                        <br/>
                        <input type='text' name={this.state.tagline} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Description:
                        <br/>
                        <input type='text' style={{height: '150px'}}name={this.state.description} onChange={this.handleChange}/>
                    </label>
                    <label>
                        First Brewed:
                        <br/>
                        <input type='text' name={this.state.first_brewed} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Brewers Tips:
                        <br/>
                        <input type='text' name={this.state.brewwers_tips} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Attenuation Level:
                        <br/>
                        <input type='number' name={this.state.attenuation_level} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Contributed By:
                        <br/>
                        <input type='text' name={this.state.contributed_by} onChange={this.handleChange}/>
                    </label>
                    <button>ADD NEW</button>
                </form>
            </div>
        )
    }
}
