import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Dashboard from './components/Dashboard'
import CharactersContainer from './containers/CharactersContainer'
import PlanetsContainer from './containers/PlanetsContainer'
import IndvidualPlanetsContainer from './containers/IndividualPlanetContainer'
import IndividualCharacterContainer from './containers/IndividualCharacterContainer'
import Dashboard from './components/Dashboard';
import VehicleContainer from './containers/VehicleContainer'
import IndividualVehicleContainer from './containers/IndividualVehicleContainer'
import './styles/css/styles.css';


class App extends Component {
  render() {
    return (
      <div class = "content">
        <Navbar/>
        <Switch>
            <Route path = "/dashboard" component = {Dashboard}/>
            <Route path = "/characters" component = {CharactersContainer} />
            <Route path = "/api/characters/:id" component = {IndividualCharacterContainer} />
            <Route path = "/planets" component = {PlanetsContainer} />
            <Route path = "/api/planets/:id" component = {IndvidualPlanetsContainer} />
            <Route path = "/vehicles" component = {VehicleContainer} />
            <Route path = "/api/vehicles/:id" component = {IndividualVehicleContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
