import React, { Component } from 'react'
import PlanetListItem from './PlanetListItem'
import VehicleListItem from './VehicleListItem'
import axios from 'axios';
import { version } from 'punycode';

let planetCode;
// let ids;
class IndividualCharacter extends Component{

    
    componentDidMount(){
        
        let characterID= this.props.match.params.id
        
        let {loadCharacter , loadHomeWorldName, loadSpeciesName} = this.props

        axios.get(`${characterID}`)//api/characters/:id
            .then( ({ data }) =>{
                console.log(data.vehicles)
                loadCharacter(data)
                // ids = data.vehicles.map((url,i)=>{
                //     let splitUrl = url.split('/')
                //     let id = splitUrl[5]
                //     let vehicleCode = parseInt(id,10)

                //     return vehicleCode
                // })

                // console.log(ids)
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
        let{ individualCharacter, homeworld, species } = this.props

        // let vehicleList = ids.map((id,i)=>{
        //     return(
        //         <div>
        //             <VehicleListItem id = {id}/>
        //         </div>
        //     )
        // })

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
                <h4>Home World</h4>
                <PlanetListItem  name = {homeworld} id = {planetCode}/>
                </div>

                {/* {vehicleList} */}
            </div>

           
        )
    }
}

export default IndividualCharacter