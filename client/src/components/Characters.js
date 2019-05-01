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
            loadCharacters(response)

          })
      }

    render(){
        let { characters } = this.props
        let list = characters.length ? (characters.map((character, i) =>{
            let id = i+1

            // few id conditions.
            if (id > 16){
                id = id + 1
            }

            if(id >=35){
                id = id +1;
            }

            if(id === 89){
                id = 35
            }


            return (
                <div key ={i} style = {{fontSize : '1.3em' }}>
                    
                    <b><CharacterListItem id = {id} name = {character.name} birth_year = {character.birth_year} gender = {character.gender}/></b>
                </div>
            )      
        })):(<h4>Loading cool people and villains....</h4>)

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