import React, { Component } from 'react'
import AllMemes from '../AllMemes/AllMemes';
import './App.css';
import Form from '../Form/Form'
import { fetchAllMemes, postMeme } from '../../apiCalls/fetch';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      memes: []
    }
  }

  componentDidMount = () => {
    fetchAllMemes()
      .then(data => {
        this.setState({ memes: data })
      })
      .catch(error => {
        console.log('Error message: ', error.message)
        this.setState({ [error]: error.message })
        console.log('state: ', this.state)
      })
  }

  addMeme = (newMeme) => {
    postMeme(newMeme)
    this.setState({ memes: [...this.state.memes, newMeme]})
  }

  deleteMeme = (id) => {
    console.log('This works. ID is: ', id)
    const filteredMemes = this.state.memes.filter(meme => meme.id !== id)
    this.setState({ memes: filteredMemes})
  }

  render() {
    return(
      <div className="app">
        <h1>MemedeaBox</h1>
        <Form addMeme={ this.addMeme } />
        { !this.state.memes.length && <h2>Network error</h2> }
        <AllMemes memes={ this.state.memes } deleteMeme = { this.deleteMeme }/>
      </div>
    )
  }
}

export default App;
