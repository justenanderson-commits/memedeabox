import React, { Component } from 'react'
import AllMemes from '../AllMemes/AllMemes';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: [
        { 
          title: "I have been waiting for this!",
          url: "https://i.redd.it/8jihe14tb19a1.jpg",
          id: 1
        }
      ],
      error: null
    }
  }

  render() {
    return(
      <div className="app">
        <h1>MemedeaBox</h1>
        <AllMemes />
      </div>
    )
  }
}

export default App;
