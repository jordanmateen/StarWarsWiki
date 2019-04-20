import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Dashboard from './components/Dashboard'
import CharactersContainer from './containers/CharactersContainer'
import PlanetsContainer from './containers/PlanetsContainer'
import IndvidualPlanetsContainer from './containers/IndividualPlanetContainer'
import IndividualCharacterContainer from './containers/IndividualCharacterContainer'
import Dashboard from './components/Dashboard';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>

        <Navbar/>
        <Switch>
            <Route path = "/dashboard" component = {Dashboard}/>
            <Route path = "/characters" component = {CharactersContainer} />
            <Route path = "/api/characters/:id" component = {IndividualCharacterContainer} />
            <Route path = "/planets" component = {PlanetsContainer} />
            <Route path = "/api/planets/:id" component = {IndvidualPlanetsContainer} />
        </Switch>
   
      
         {/* <CharactersContainer/> */}
         {/* <PlanetsContainer/> */}
      </div>
    );
  }
}

export default App;
