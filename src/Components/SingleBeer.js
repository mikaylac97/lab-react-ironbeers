import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'
const axios = require('axios')

export default class SingleBeer extends Component {
    
        state = {
            clickedBeer: {}
        }

        componentDidMount = () => {
            const beerId = this.props.match.params.id ? `${this.props.match.params.id}` : 'random'
            axios
                .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                .then(response => {
                    this.setState({
                        clickedBeer: response.data
                    })
                })
                .catch(err => console.log(err))
        }

    
    render() {
        const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state.clickedBeer
        return (
            <div>
                <Header />
                <div className='single-beer'>
                    <img src={image_url} alt='beer' />
                    <div>
                        <h2>{name}</h2>
                        <h3 style={{color: 'gray'}}>{attenuation_level}</h3>
                    </div>
                    <div>
                        <span style={{color: 'gray'}}>{tagline}</span>
                        <span>{first_brewed}</span>
                    </div>
                    <p>{description}</p>
                    <p style={{color: 'gray'}}>{contributed_by}</p>
                </div>
            </div>
        )
    }
}
