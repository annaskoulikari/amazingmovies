import { GET_MOVIES, SEARCH_MOVIES } from "./types";
import axios from "axios";

export const getMovies = () => dispatch => {
  axios
    .get("/movies")
    .then(res => {
      console.log("this is response", res);
      dispatch({
        type: GET_MOVIES,
        payload: res.data.results
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const searchMovies = searchTerm => dispatch => {
  console.log("reached searchMovies action");
  axios
    .post("/moviesSearch", { searchTerm: searchTerm })
    .then(res => {
      console.log("this is response", res);
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results
      });
    })
    .catch(err => {
      console.log(err);
    });
};
