import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import IronBeersAPI from '../api/IronBeersAPI'

export default class AllBeers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             allBeers: [],
             search: ''
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

    handleSearch = async (event) => {
       await this.setState({
           search: event.target.value.toLowerCase()
       })
       IronBeersAPI
            .searchBeer(this.state.search)
            .then(query => {
                console.log({search: query.data})
                this.setState({
                    allBeers: query.data
                })
            })
            .catch(err => console.log(err))
    }

    
    render() {
        return (
            <div>
                <Header />
                <input placeholder='Search beers' type='text' onChange={this.handleSearch}></input>
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

