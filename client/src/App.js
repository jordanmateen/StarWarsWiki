import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom'
// import CharactersContainer from './containers/CharactersContainer'
import PlanetsContainer from './containers/PlanetsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         {/* <CharactersContainer/> */}
         <PlanetsContainer/>
      </div>
    );
  }
}

export default App;
