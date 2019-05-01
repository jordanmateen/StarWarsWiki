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
            loadPlanets(data)
        })
    }

    render(){
        let { planets } =this.props
        let planetList = planets.length ? (planets.map( (planet, i)=>{
            return(
                <div key = {i} style = {{fontSize : '1.3em' }}>
                   <b> <PlanetListItem id = {i + 2} name = {planet.name}/> </b>
                </div>
            )
        })):(<h4>The Universe is a big place. One moment please...</h4>)
        return(
            <div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path = '/planets' render ={()=>planetList}/>
                            <Route path = '/api/planets/:id/' component = {IndividualPlanetContainer}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Planets