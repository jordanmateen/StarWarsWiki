import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SplashPage from './components/SplashPage'
import CharactersContainer from './containers/CharactersContainer'
import PlanetsContainer from './containers/PlanetsContainer'
import IndvidualPlanetsContainer from './containers/IndividualPlanetContainer'
import IndividualCharacterContainer from './containers/IndividualCharacterContainer'
import VehicleContainer from './containers/VehicleContainer'
import IndividualVehicleContainer from './containers/IndividualVehicleContainer'
import './styles/css/styles.css';


class App extends Component {
  render() {
    return (
      <div className = "content">
        <Navbar/>
        <Switch>
            <Route path = "/home" component ={SplashPage}/>
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
