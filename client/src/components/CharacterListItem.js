import React , { Component } from  'react'
import { withRouter } from 'react-router-dom'


class CharacterListItem extends Component{
    
    
    
    clickHandler =()=>{
        let { id } = this.props
       this.props.history.push(`api/characters/${id}`)///----
       
    }

    render(){
        let {name , birth_year, gender} = this.props
        return(
            <div>
                <div onClick = {this.clickHandler.bind(this)}>
                    <div>
                    <h4>{name}</h4>
                    </div>
                    <div>
                        <p>Birth Year: <em>{birth_year}</em></p>
                        <p>Gender: {gender}</p>
                    </div>
                </div>
            </div>
        )
    }  
}

export default withRouter(CharacterListItem)
