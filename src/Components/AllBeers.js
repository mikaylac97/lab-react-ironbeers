import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import IronBeersAPI from '../api/IronBeersAPI'

export default class AllBeers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             allBeers: [],
        }
    }

    componentDidMount() {
        IronBeersAPI
          .getBeers()
          .then((apiResponse) => {
            console.log(apiResponse);
            this.setState({ allBeers: apiResponse.data });
          })
          .catch((err) => console.log(err));
      }

    
    render() {
        return (
            <div>
                <Header />
                {this.state.allBeers.map(beer => (
                    <Link key={beer._id} to={`/beers/${beer._id}`}>
                        <div className='beer-box'>
                            <div className='beer-img'>
                                <img src={beer.image_url} alt='beer' />
                            </div>
                            <div className='beer-info'>
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <span>Created by: {beer.contributed_by}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
}

