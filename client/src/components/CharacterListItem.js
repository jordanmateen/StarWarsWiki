import React , { Component } from  'react'
import { withRouter } from 'react-router-dom'

class CharacterListItem extends Component{
    
    clickHandler =()=>{
       let { id } = this.props
       this.props.history.push(`/api/characters/${id}`)///----
       window.location.reload()
    }

    render(){
        let {name} = this.props
        return(
            <div>
                <div onClick = {this.clickHandler.bind(this)}>
                    <div>
                    <h4>{name}</h4>
                    </div>
                </div>
            </div>
        )
    }  
}

export default withRouter(CharacterListItem)
