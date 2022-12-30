import React from 'react'
import './AllMemes.css'
import SingleMeme from '../SingleMeme/SingleMeme'

const AllMemes = () => {
  return (
    <div className="all-memes">
      <SingleMeme />
      <SingleMeme />
      <SingleMeme />
    </div>
  )
}

export default AllMemes