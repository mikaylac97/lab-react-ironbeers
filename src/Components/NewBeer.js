import React, { Component } from 'react'
import Header from './Header'
import IronBeersAPI from '../api/IronBeersAPI'
// const axios = require('axios')

export default class NewBeer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
        }
    }
    
    
    
    handleChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSumbit = (event) => {
        event.preventDefault();
        IronBeersAPI
            .createNewBeer(this.state)
            .then((apiResponse) => console.log({newBeer: apiResponse.data}))
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
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Tagline:
                        <br/>
                        <input type='text' name='tagline' value={this.state.tagline} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Description:
                        <br/>
                        <input type='text' name='description' style={{height: '150px'}}value={this.state.description} onChange={this.handleChange}/>
                    </label>
                    <label>
                        First Brewed:
                        <br/>
                        <input type='text' name='first_brewed' value={this.state.first_brewed} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Brewers Tips:
                        <br/>
                        <input type='text' name='brewers_tips' value={this.state.brewers_tips} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Attenuation Level:
                        <br/>
                        <input type='number' name='attenuation_level' value={this.state.attenuation_level} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Contributed By:
                        <br/>
                        <input type='text' name='contributed_by' value={this.state.contributed_by} onChange={this.handleChange}/>
                    </label>
                    <button>ADD NEW</button>
                </form>
            </div>
        )
    }
}
