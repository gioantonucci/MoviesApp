import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {getClean, getMovieDetail} from "../../actions";
import NavBar from "../NavBar/NavBar";
import './Movie.css';


function Movie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const Detail = useSelector((state) => state.movieDetail)
  useEffect(() => {
    dispatch(getMovieDetail(id));
    dispatch(getClean());
   
  }, [dispatch, id]);
 


  return (
    <div className="movie-detail">
      <NavBar />
      <h1>{Detail.Title}</h1>
      <p>{Detail.Year}</p>
      <p>{Detail.Rated}</p>
      <p>{Detail.Director}</p>
      <img src={Detail.Poster} alt={Detail.Title}></img>
      <p>{Detail.Genre}</p>
      <p>{Detail.Plot}</p>

      {/* <p>{Detail.Ratings?[0].Source}: {Detail.Ratings[0]?.Value}</p>
      <p>{Detail.Ratings?[1].Source}: {Detail.Ratings[1]?.Value}</p> 
      <p>{Detail.Ratings?[2].Source}: {Detail.Ratings[2]?.Value}</p>   */}
    </div>
  );
}

export default Movie;
