import React, { Component } from 'react'

export default class ListPage extends Component {
  state = {
    characters: []
  }
  
  handleClick = () => {
    fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters')
    .then(res => res.json())
    .then(json =>
      this.setState({ 
        characters: json.results 
      }));
  }
  
  render() {
    const { characters } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Show Me XFiles Characters</button>
        <div id="list-display">
          {
            characters.map(character => {
              return <li>{character.name}</li>
            })
          }
        </div>
      </div>
    )
  }
}
