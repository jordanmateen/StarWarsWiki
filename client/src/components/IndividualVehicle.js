import React ,{ Component } from 'react'
import CharacterListItem from './CharacterListItem'
import axios from 'axios'
let pilotList;

class IndividualVehicle extends Component{

    componentDidMount(){
        let vehicleID = this.props.match.params.id
        let { loadVehicle, loadPeople } = this.props
        axios.get(`${vehicleID}`)//api/starships/:id
            .then( ({ data })=>{
                console.log(data.pilots,"Your pilots")
                loadVehicle(data)

                let urls = data.pilots.map( (url)=>{
                    return axios.get(url)
                })
                pilotList = data.pilots.map((url,i)=>{
                    let idList = url.split('/')
                    let id = idList[5]
                    let characterId = parseInt(id,10)

                    return characterId
                })

                console.log(pilotList)
                Promise.all(urls)
                    .then((data)=>{
                        let pilots = data.map( data =>{
                            return data.data.name
                        })
                        loadPeople(pilots)
                    })
            }).catch(err =>{
                if(err){
                    throw err
                }
            })


    }
    render(){
        let { individualVehicle, people } = this.props

        let pilots = people.map( (name,i) =>{
            return (
                <div key = {i}>
                    <ul>
                        <li><b><CharacterListItem id = {pilotList[i]} name = {name}/></b></li>
                    </ul>
                    
                </div>    
            ) 
        })

        console.log(individualVehicle)
        return(
            <div>
                <h1>{individualVehicle.name}</h1>
                <h3>Specifications: </h3>
                <ul>
                    <li><b>Model: {individualVehicle.model}</b></li>
                    <li><b>Class : {individualVehicle.vehicle_class} </b></li>
                    <li><b>Manufacturer :    {individualVehicle.manufacturer}</b></li>
                    <li><b>Length : {individualVehicle.length} meters </b></li>
                    <li><b>Credits/Price:    {individualVehicle.cost_in_credits} centimeters</b></li>
                    <li><b>Crew Size : {individualVehicle.crew}</b></li>
                    <li><b>Passengers : {individualVehicle.passengers}</b></li>
                    <li><b>Consumables / Food Supply : {individualVehicle.consumables} </b></li>
                    <li><b>Cargo Capacity: {individualVehicle.cargo_capacity} </b></li>
                 
                </ul>

                <h3>Pilots : </h3>
                {pilots}

            </div>
        )
    }
}

export default IndividualVehicle