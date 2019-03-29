import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import peopleReducer from "./peopleReducer";
import tvReducer from "./tvReducer";

export default combineReducers({
  movies: movieReducer,
  people: peopleReducer,
  tv: tvReducer,
  moviesSearch: movieReducer
});
