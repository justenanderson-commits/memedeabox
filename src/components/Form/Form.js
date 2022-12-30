import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      url: ''
    }
  }

  render() {
    return(
      <form>
        <input
          type="text"
          name="title"
          placeholder="Add an interesting title"
          value={ this.state.title }
        />

        <input  
          type="text"
          name="url"
          placeholder="What's the meme's address?"
          value={ this.state.url }
          />

        <button>Save to my collection</button>
      </form>
    )
  }
}

export default Form