import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import peopleReducer from "./peopleReducer";
import tvReducer from "./tvReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  movies: movieReducer,
  people: peopleReducer,
  tv: tvReducer,
  moviesSearch: movieReducer,
  error: errorReducer,
  auth: authReducer
});
