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
                    <CharacterListItem id = {i = characterIdList[i]} name = {name}/>
                </div>    
            ) 
        })
        return(
            <div>

                <h1>{individualPlanet.name}</h1>
                <div>
                    <p>Specifications:</p>
                    <ul>
                        <li>Population: {individualPlanet.population}</li>
                        <li>Diameter:   {individualPlanet.diameter}</li>
                        <li>Climate:    {individualPlanet.climate}</li>
                        <li>Gravity:    {individualPlanet.gravity}</li>
                        <li>Terrain:    {individualPlanet.terrain}</li>
                    </ul>
                   <h3>Known Residents:</h3>
                   {residents}
                </div>
            </div>
        )
    }
}

export default IndividualPlanet