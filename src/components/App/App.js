import React, { Component } from 'react'
import AllMemes from '../AllMemes/AllMemes';
import './App.css';
import Form from '../Form/Form'


class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: [
        { 
          title: "I have been waiting for this!",
          url: "https://i.redd.it/8jihe14tb19a1.jpg",
          id: 1
        },
        { 
          title: "And I'm saying this as a Gen Z kid",
          url: "https://i.redd.it/561lxn7pj29a1.gif",
          id: 2
        },
        { 
          title: "Can't beat me",
          url: "https://i.redd.it/afwvkxccg09a1.gif",
          id: 3
        },
      ],
      error: null
    }
  }

  // addMeme is a function that will update the state of this component. It'll first have to spread the existing state, then add the new Meme, wrap it up in a new array, then set the state. That function will then have to be passed down to the Form.

  addMeme = (newMeme) => {
    this.setState({ memes: [...this.state.memes, newMeme]})
  }

  render() {
    return(
      <div className="app">
        <h1>MemedeaBox</h1>
        <Form addMeme={ this.addMeme } />
        <AllMemes memes={ this.state.memes }/>
      </div>
    )
  }
}

export default App;
