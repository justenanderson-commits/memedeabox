const fetchAllMemes = () => {
  return fetch('http://localhost:3001/api/v1/memes')
    .then(response => {
      if(!response.ok) {
        throw new Error("Couldn't reach the server")
      } 
      return response.json()
    })
}

const postMeme = (newMeme) => {
  return fetch('http://localhost:3001/api/v1/memes', {
    method: 'POST',
    body: JSON.stringify(newMeme),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => { 
    return response.json })
  .catch(error => {
    console.log("Couldn't post: ", error.message)
    return error
  })
}

export { fetchAllMemes, postMeme }