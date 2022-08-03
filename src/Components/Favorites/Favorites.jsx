import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteFav } from '../../actions';
import NavBar from '../NavBar/NavBar'

function Favorites() {
 
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.moviesFavorites);
 
  console.log(favorites)
 
  
  let handleDelete = (imdbID) => {
    dispatch(deleteFav(imdbID))
  }


  
  return (
    <div>
        <NavBar/>
        <h1>Peliculas favoritas</h1>
        <ul>
        { 
         favorites?.map((m) => {
          return(
          <div key={m.imdbID}>
            <Link to = {`/movie/${m.imdbID}`}>
              <span>{m.Title}</span>
            </Link>
            <button onClick={() => handleDelete(m.imdbID)}> Borrar </button>
          </div>)
          })}
        </ul>

    </div>
  )
}

export default Favorites
