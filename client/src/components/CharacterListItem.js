import React , { Component } from  'react'
import { withRouter } from 'react-router-dom'

class CharacterListItem extends Component{
    
    clickHandler =()=>{
       let { id } = this.props
       this.props.history.push(`/api/characters/${id}`)///----
       window.location.reload()
    }

    render(){
        let {name, id} = this.props
        return(
            <div>
                <div onClick = {this.clickHandler.bind(this)}>
                    <div>
                    <p>{name}</p>
                    </div>
                </div>
            </div>
        )
    }  
}

export default withRouter(CharacterListItem)
