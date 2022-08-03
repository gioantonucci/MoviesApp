const apiKey = "81bb95e6";

export function getMovies(title) {
  return async function (dispatch) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
    );
    const movies = await response.json();
    return dispatch({ type: "GET_MOVIES", payload: movies });
  };
};

export function getMovieDetail(id) {
  return (dispatch) => fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then((response) => response.json())
      .then((detail) => {
          dispatch({ type: "GET_MOVIE_DETAIL", payload: detail });
      });
};


export function getClean () {
    return{
        type: "GET_CLEAN",
        payload: []
    };
};

export function addFav(movie) {
    return {
        type: 'ADD_FAVORITE',
        payload: movie
    }
}

export function deleteFav(id) {
    return {
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}
