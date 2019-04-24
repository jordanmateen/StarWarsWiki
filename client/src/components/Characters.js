import React, { Component } from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import CharacterListItem from './CharacterListItem'
import * as Utils from '../Utilities'
import IndividualCharacterContainer from  '../containers/IndividualCharacterContainer';


class  Characters extends Component {

    componentDidMount() {
        let { loadCharacters }  = this.props
        new Promise((resolve, reject) => {
          Utils.getStarWarsData('api/characters', [], resolve, reject)
        }).then(response => {
            console.log(response[0].starships)
            loadCharacters(response)

          })
      }

    render(){
        let { characters } = this.props
        let list = characters.map((character, i) =>{
            return (
                <div key ={i}>
                    <CharacterListItem id = {i + 1} name = {character.name} birth_year = {character.birth_year} gender = {character.gender}/>
                </div>
            )      
        })

        return(
            <div>
                <div>

                    <BrowserRouter>
                        <Switch>
                            <Route exact path = "/characters" render = {()=>list}/>
                            <Route path = '/api/characters/:id/' component = {IndividualCharacterContainer}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Characters