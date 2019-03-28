import { GET_MOVIES } from "./types";
import axios from "axios";

export const getMovies = () => dispatch => {
  axios
    .get(
      "/movies"
      // "https://api.themoviedb.org/3/trending/movie/week?api_key=943d003becc08df50bf054b11efaccb1"
    )
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
