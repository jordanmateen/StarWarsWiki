import React, { Component } from 'react'
import axios from 'axios';

class IndividualCharacter extends Component{


    componentDidMount(){

        let characterID= this.props.match.params.id
        let {loadCharacter , loadHomeWorldName, loadSpeciesName} = this.props

        axios.get(`${characterID}`)//api/characters/:id
            .then( ({ data }) =>{
                loadCharacter(data)
                let homeworldPromiseURL = axios.get(data.homeworld)
                let speciesPromiseURL = axios.get(data.species)
                return Promise.all([homeworldPromiseURL, speciesPromiseURL])
        }).then(( [homeworld , species] ) =>{
            console.log(species.data.name)
            loadHomeWorldName(homeworld.data.name)
            loadSpeciesName(species.data.name)
        }).catch(err=>{
            console.log('Something went wrong<---->Promise rejected',err)
        })
    }

    render(){
        let{ individualCharacter, homeworld, species} = this.props
  
        return(
            <div>
                <h1>{individualCharacter.name}</h1>
                <h3>Specifications: </h3>
                <p>Birth Year: {individualCharacter.birth_year}</p>
                <p>Gender : {individualCharacter.gender}</p>
                <p>Height : {individualCharacter.height} centimeters</p>
                <p>Species: {species}</p>
                <div>
                <p>HomeWorld : {homeworld}</p>
                </div>
            </div>
        )
    }
}

export default IndividualCharacter