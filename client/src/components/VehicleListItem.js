import React , { Component } from  'react'
import { withRouter } from 'react-router-dom'

class VehicleListItem extends Component{

    clickHandler =()=>{
        let { id } = this.props
        this.props.history.push(`/api/vehicles/${id}`)///----
    }
    render(){
        let { name } =this.props
        return(
            <div onClick = {this.clickHandler.bind(this)}>
                <h4>{name}</h4>
            </div>
        )
    }
}

export default withRouter(VehicleListItem)