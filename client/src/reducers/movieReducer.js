import { GET_MOVIES, SEARCH_MOVIES } from "../actions/types";

const initialState = {
  movies: [],
  moviesSearch: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        moviesSearch: action.payload
      };

    default:
      return state;
  }
}
