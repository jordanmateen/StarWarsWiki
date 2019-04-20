import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class PlanetListItem extends Component {
    
  clickHandler =()=>{
    let { id } = this.props
   this.props.history.push(`/api/planets/${id}`)
  } 

    render(){
      let { name , population } = this.props
        return(
            <div onClick = {this.clickHandler.bind(this)}>
              <div>
              <h4>{name}</h4>
              </div>

              <div>
                <p>Population: {population}</p>

              </div>
                
            </div>
        )
    }
}  

export default withRouter(PlanetListItem)