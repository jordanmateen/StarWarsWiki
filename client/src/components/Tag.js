import React, { Component } from 'react'
import TagItems from './TagItems'
import TagForm from './TagForm'

class Tag extends Component {
    constructor() {
      super();
      
      this.state = {
        tags: []
      };
    }

    deleteTag=(id)=>{
      const tags = this.state.tags.filter( tags =>{
        return tags.id !== id
      })
      this.setState({tags})
      console.log(id)
    }

    addTag =(tag)=>{
      tag.id = Math.random()
      let tags = [...this.state.tags,tag]
      this.setState({tags})
    }

    render(){
      let {name} = this.props
      return(
        <div>
          <h3>Tag's {name}</h3>
          <TagItems tags = {this.state.tags} deleteTag = {this.deleteTag}/>
          <TagForm addTag = {this.addTag}/>
        </div>
      )
    }
    
}
  export default Tag