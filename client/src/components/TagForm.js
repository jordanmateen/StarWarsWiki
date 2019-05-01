import React, { Component } from 'react'

class AddTag extends Component {
    state ={
        content : ''
    }

    handleChange =(e)=>{
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit =(e)=>{
        let { addTag } = this.props
        e.preventDefault()
        addTag(this.state)
        this.setState({
            content : ''
        })
    }

    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type = 'text'onChange ={this.handleChange} value = {this.state.content} placeholder = "Add Tag"/>
                </form>
            </div>
        )
    }
}

export default AddTag