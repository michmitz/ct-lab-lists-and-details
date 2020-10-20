import React, { Component } from 'react'

export default class ListPage extends Component {
  handleClick = () => {
    fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters')
    .then(res => res.json())
    .then(json => console.log(json));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Show Me XFiles Characters</button>
      </div>
    )
  }
}
