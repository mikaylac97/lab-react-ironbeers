import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './Components/Home'
import AllBeers from './Components/AllBeers'
import SingleBeer from './Components/SingleBeer'
import NewBeer from './Components/NewBeer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={AllBeers} />
        <Route exact path='/random-beer' component={SingleBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
        <Route exact path='/beers/:id' component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
