import React, { Component } from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import * as Utils from '../Utilities'
import VehicleListItem from './VehicleListItem'
import IndividualVehicleContainer from '../containers/IndividualVehicleContainer'
let vehicleCode = []
class Starships extends Component{

    componentDidMount(){
        let { loadVehicles } = this.props
        new Promise((resolve, reject) => {
            Utils.getStarWarsData('api/vehicles', [], resolve, reject)
          }).then(response => {
                console.log(response)
                
                //Creating vehicle ID
                let urlList = response.map((url, i)=>{
                    url = response[i].url
                    return url
                })
                vehicleCode = urlList.map((vid,i)=>{
                    let newId = urlList[i].split('/')
                    let idPosition = newId[5]
                    vid = parseInt(idPosition,10)
                    return vid
                })

                //loading vehicle information
                loadVehicles(response)
            })
    }
    render(){
        let { vehicles } = this.props
        console.log(vehicles , ' look here ')

        let vehiclesList = vehicles.length ? (vehicles.map( (vehicle,i)=>{
            return(
                <div key ={i} style = {{fontSize : '1.3em' }}>  
                    <b><VehicleListItem id = {vehicleCode[i]} name = {vehicle.name}/></b>
                </div>
            )
        })):(<h4>Can't really find these in a dealership. Loading Vehicles...</h4>)
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path = '/vehicles' render = {()=>vehiclesList}/>
                        <Route path = '/api/vehicles/:id/' component = {IndividualVehicleContainer}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Starships