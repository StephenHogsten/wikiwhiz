import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import _ClickMe from '../containers/_ClickMe';
import RandomArticle from './RandomArticle';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';
import '../scss/App.scss';

class App extends Component {
  render() {
    return (
      
      <Switch>  
        <Route exact path='/' render={() => (
          <div className='App'>
            <h1 className='header'>Welcome to your wiki browser</h1>
            <RandomArticle />
            <SearchBar />
            <SearchResults />
          </div>
        )} />
        <Route render={() => (
          <p class='error'>Invalid path given</p>
        )} />
      </Switch>
    );
  }
}

export default App;