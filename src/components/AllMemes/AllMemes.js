import React from 'react'
import './AllMemes.css'
import SingleMeme from '../SingleMeme/SingleMeme'

const AllMemes = ({ memes }) => {
  
  const showSingleMeme = memes.map(meme => {
    return (
      <SingleMeme 
        title={ meme.title }
        url={ meme.url }
        id={ meme.id } 
        key={ meme.id }
      />
    )
  })
  
  return (
    <div className="all-memes">
      { showSingleMeme }

    </div>
  )
}

export default AllMemes