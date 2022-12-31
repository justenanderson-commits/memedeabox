const fetchAllMemes = () => {
  return fetch('http://localhost:3001/api/v1/memes')
    .then(response => {
      if(!response.ok) {
        throw new Error("Couldn't reach the server")
      } 
      return response.json()
    })
}

export default fetchAllMemes