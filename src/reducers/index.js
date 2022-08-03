const initialState = {
  moviesLoaded: [],
  moviesFavorites: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload,
      };
    case "GET_CLEAN":
      return {
        ...state,
        movieDetail: action.payload,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        moviesFavorites: [...state.moviesFavorites, action.payload]
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter((movie) => movie.imdbID !== action.payload)
      };
    default:
      return {
        ...state,
      };
  }
}
export default rootReducer;
