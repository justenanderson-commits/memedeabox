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

  handleChange = (event) => {
    this.setState = ({ [event.target.name]: event.target.value})
  }

  submitMeme = (event) => {
    event.preventDefault()
    const newMeme = {
      ...this.state,
      id: Date.now()
    }
    this.props.addMeme(newMeme)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState = {
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
          onChange={ (event) => this.handleChange(event)}
        />

        <input  
          type="text"
          name="url"
          placeholder="What's the meme's address?"
          value={ this.state.url }
          onChange={ (event) => this.handleChange(event)}
          />

        <button onClick={ (event) => this.submitMeme(event) }>Save to my collection</button>

      </form>
    )
  }
}

export default Form