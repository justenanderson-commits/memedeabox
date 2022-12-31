import './SingleMeme.css'

const SingleMeme = ({ title, url, id, deleteMeme }) => {
  return ( 
    <div className="single-meme" key={ id } id={ id }>
      <p>{ title }</p>
      <img src={ url } />
      <button onClick={ () => deleteMeme(id)}>Delete</button>
    </div>
   )
}
 
export default SingleMeme