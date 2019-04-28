import React, { Component } from 'react'
import PlanetListItem from './PlanetListItem'
import VehicleListItem from './VehicleListItem'
import axios from 'axios';
import { version } from 'punycode';

let planetCode;
let ids = [];
class IndividualCharacter extends Component{

    
    componentDidMount(){
        
        let characterID= this.props.match.params.id
        
        let {loadCharacter , loadHomeWorldName, loadSpeciesName, loadVehicles} = this.props

        axios.get(`${characterID}`)//api/characters/:id
            .then( ({ data }) =>{
                // console.log(data.vehicles)
                loadCharacter(data)
                let urls =[]

                ids = data.vehicles.map((url,i)=>{
                    urls.push(axios.get(url))
                    let splitUrl = url.split('/')
                    let id = splitUrl[5]
                    let vehicleCode = parseInt(id,10)
                    return vehicleCode
                })

                console.log(urls)
                Promise.all(urls).then( data =>{
                    let vehicleList = data.map((vehicles,i)=>{
                        return vehicles.data.name
                    })
                    loadVehicles(vehicleList)
                })
                
                let homeworldPromiseURL = axios.get(data.homeworld)
                let speciesPromiseURL = axios.get(data.species)
                return Promise.all([homeworldPromiseURL, speciesPromiseURL])
        }).then(( [homeworld , species] ) =>{
            let url = homeworld.data.url
            let arr = url.split('/')
            let id = arr[5]
            planetCode = parseInt(id,10)
            loadHomeWorldName(homeworld.data.name)
            loadSpeciesName(species.data.name)
        }).catch(err=>{
            console.log('Something went wrong<---->Promise rejected',err)
        })
    }



    render(){
        let{ individualCharacter, homeworld, species , vehicles} = this.props

        console.log(vehicles)

        let vehicleList = vehicles.map((name,i)=>{
            return(
                <div key ={i}>
                    <VehicleListItem  name = {name} id = {ids[i]}/>
                </div>
            )
        })

        return(
            <div>
                <h1>{individualCharacter.name}</h1>
                <h3>Specifications: </h3>
                <ul>
                    <li><b>Birth Year: {individualCharacter.birth_year}</b></li>
                    <li><b>Gender :    {individualCharacter.gender}</b></li>
                    <li><b>Height :    {individualCharacter.height} centimeters</b></li>
                    <li><b>Species:    {species}</b></li>
                </ul>
                <div>
                <h4>Home World:</h4>
                <PlanetListItem  name = {homeworld} id = {planetCode}/>
                </div>
                <h4>Vehicles:</h4>
                {vehicleList}
            </div>

           
        )
    }
}

export default IndividualCharacter