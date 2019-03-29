import { GET_TV } from "./types";
import axios from "axios";

export const getTv = () => dispatch => {
  axios
    .get("/tv")
    .then(res => {
      console.log("this is response", res);
      dispatch({
        type: GET_TV,
        payload: res.data.results
      });
    })
    .catch(err => {
      console.log(err);
    });
};
