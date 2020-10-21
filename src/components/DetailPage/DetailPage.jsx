import React, { Component } from 'react'

export default class DetailPage extends Component {
  state = {
    character: {}
  }
  
  componentDidMount = () => {
      const characterName = this.props.match.params.name
      return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${characterName}`)
      .then(res => res.json())
      // .then(json => console.log(json)) 
      .then(json =>
        this.setState({ 
          character: json[0]
        }));
    }
  
  render() {
    console.log('STATE',this.state)
    const { character } = this.state;
    return (
      <div id="character-details">
        <h2>{character.name}</h2>
        <p>{character.description}</p>
        <img src={character.image}/>
      </div>
    )
  }
}
