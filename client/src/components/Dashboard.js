import React, { Component } from 'react'

// class Dashboard extends Component {

//     render(){

    
//     return(
//         <div>
//             <h1>
//                 Jordan
//             </h1>
//         </div>
//     )
//     }
// }

// export default Dashboard

class Dashboard extends React.Component {
    constructor() {
      super();
      
      this.state = {
        tags: []
      };
    }
    
    removeTag = (i) => {
      const newTags = [ ...this.state.tags ];
      newTags.splice(i, 1);
      this.setState({ tags: newTags });
    }
  
    inputKeyDown = (e) => {
      const val = e.target.value;
      if (e.key === 'Enter' && val) {
        if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
          return;
        }
        this.setState({ tags: [...this.state.tags, val]});
        this.tagInput.value = null;
      }
    }
  
    render() {
      const { tags } = this.state;
  
      return (
        <div className="input-tag">
            <h3>Create Tags for  {this.props.name}:</h3>
          <ul className="input-tag__tags">
            { tags.map((tag, i) => (
              <li key={tag}>
                {tag}
                <button type="button" onClick={() => { this.removeTag(i); }}>X</button>
              </li>
            ))}
            <li className="input-tag__tags__input"><input type="text" onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
          </ul>
        </div>
      );
    }
  }
  export default Dashboard