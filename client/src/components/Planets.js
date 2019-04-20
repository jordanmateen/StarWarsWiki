import React, { Component } from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import * as Utils from '../Utilities'
import PlanetListItem from './PlanetListItem'
import IndividualPlanetContainer from '../containers/IndividualPlanetContainer'



class Planets extends Component {

    componentDidMount(){
        let { loadPlanets } = this.props
        new Promise((resolve,reject)=>{
            Utils.getStarWarsData('api/planets', [], resolve, reject)
        }).then(data =>{
            console.log(data)
            loadPlanets(data)
        })
    }

    render(){
        let { planets } =this.props

        let planetList = planets.map( (planet, i)=>{
            return(
                <div key = {i}>
                    <PlanetListItem id = {i + 2} name = {planet.name} population = {planet.population}/>
                </div>
            )
        })
        return(
            <div>
                
                    {/* <div className = "App">
                            <header >
                                <h1 >Planets</h1>
                                <p>Click to explore Planets!!</p>
                            </header>
                    </div> */}
                
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path = '/planets' render ={()=>planetList}/>
                            <Route path = '/api/planets/:id' component = {IndividualPlanetContainer}/>
                        </Switch>
                    </BrowserRouter>
                </div>
              
            </div>
        )
    }
}

export default Planets