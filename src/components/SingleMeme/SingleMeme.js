import './SingleMeme.css'

const SingleMeme = ({ title, url, id }) => {
  return ( 
    <div className="single-meme" key={ id } id={ id }>
      <p>{ title }</p>
      <img src={ url } />
      <button>Delete</button>
    </div>
   )
}
 
export default SingleMeme