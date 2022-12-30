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

  render() {
    return(
      <div className="app">
        <h1>MemedeaBox</h1>
        <Form />
        <AllMemes memes={ this.state.memes }/>
      </div>
    )
  }
}

export default App;
