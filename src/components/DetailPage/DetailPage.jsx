import React, { Component } from 'react'

export default class DetailPage extends Component {
  state = {
    character: null
  }
  
  componentDidMount = async() => {
      // const characterName = this.props.match.params.name
      fetch('https://xfiles-api.herokuapp.com/api/v1/characters/Flukeman')
      .then(res => res.json())
      // .then(json => console.log(json)) 
      .then(json =>
        this.setState({ 
          character: json
        }));
    }
  
  render() {
    const { character } = this.state;
    return (
      <div id="character-details">
        <h2>{character.name}</h2>
      </div>
    )
  }
}
