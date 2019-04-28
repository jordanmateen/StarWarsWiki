import React, { Component } from 'react'
import axios from 'axios'
import CharacterListItem from './CharacterListItem'
let characterIdList;
class IndividualPlanet extends Component {

    componentDidMount(){
        //do something here later.
        let { loadPlanetInfo,loadPeople} = this.props
        let planetID = this.props.match.params.id
        axios.get(`${planetID}`) //api/planets/:id
            .then( ({ data }) =>{
                loadPlanetInfo(data)

                let urls = data.residents.map( (url)=>{
                    return axios.get(url)
                })
                characterIdList = data.residents.map((url,i)=>{
                    let idList = url.split('/')
                    let id = idList[5]
                    let characterId = parseInt(id,10)

                    return characterId
                })
                Promise.all(urls)
                    .then((data)=>{
                        let residentList = data.map( data =>{
                            return data.data.name
                        })
                        loadPeople(residentList)
                    })
            }).catch(err =>{
                throw err
            })
    }
    render(){

        console.log(characterIdList, 'look here')
        let { individualPlanet, people } = this.props
        let residents = people.map( (name,i) =>{
            return (
                <div key = {i}>
                    <CharacterListItem id = {characterIdList[i]} name = {name}/>
                </div>    
            ) 
        })
        return(
            <div>

                <h1>{individualPlanet.name}</h1>
                <div>
                    <h3>Specifications:</h3>
                    <ul>
                        <li><b>Population: {individualPlanet.population}</b></li>
                        <li><b>Diameter:   {individualPlanet.diameter}</b></li>
                        <li><b>Climate:    {individualPlanet.climate}</b></li>
                        <li><b>Gravity:    {individualPlanet.gravity}</b></li>
                        <li><b>Terrain:    {individualPlanet.terrain}</b></li>
                    </ul>
                   <h3>Known Residents:</h3>
                   <p>{residents}</p>
                </div>
            </div>
        )
    }
}

export default IndividualPlanet