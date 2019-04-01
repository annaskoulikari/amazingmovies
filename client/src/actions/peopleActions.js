import { GET_PEOPLE } from "./types";
import axios from "axios";

export const getPeople = () => dispatch => {
  axios
    .get("/people")
    .then(res => {
      dispatch({
        type: GET_PEOPLE,
        payload: res.data.results
      });
    })
    .catch(err => {
      console.log(err);
    });
};
