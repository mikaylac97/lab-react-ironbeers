import axios from 'axios';

const service = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

export default {
    service,

    getBeers() {
        return service.get('/');
    },
    getSingleBeer(id) {
        return service.get(`/${id}`)
    },
    getRandomBeer() {
        return service.get('/random')
    },
    getNewBeer(){
        return service.get('/new')
    },
    searchBeer(query){
        return service.get(`/search?q=${query}`)
    },
}