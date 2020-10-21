import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListPage extends Component {
  state = {
    characters: []
  }
  
  handleClick = () => {
    fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters')
    .then(res => res.json())
    // .then(json => console.log(json))
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
              return <Link key={character.name} to={`/${character.name}`}>
                <li key={character.name}>{character.name}</li>
              </Link>
            })
          }
        </div>
      </div>
    )
  }
}
