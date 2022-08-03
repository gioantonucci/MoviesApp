import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import './Search.css';
import { addFav, getMovies } from "../../actions";

function Search() {
  const dispatch = useDispatch();
  const [title, setTitle]= useState('');
  const allMovies = useSelector((state) => state.moviesLoaded);
  
  // useEffect(() => {
  //   dispatch(addFav());
   
  // }, [dispatch]);
  
  let handleChange = (e) => {
    setTitle(e.target.value);
  }
  
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMovies(title))
    
  }
  
    let handleFavs = (m) => {
      dispatch(addFav(m));
    }


    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
            placeholder="Busca una película"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         { 
         allMovies?.map((m) => {
          return(
          <div key={m.imdbID}>
            <Link to = {`/movie/${m.imdbID}`}>
              {m.Title}
            </Link>
            <button value={m.Title} onClick={() => handleFavs(m)}>Añadir a favoritos</button>
          </div>)
          })}
          
    
        </ul>
      </div>
    );
  }



export default Search;