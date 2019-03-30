import { LOG_IN } from "./types";
import axios from "axios";

export const logIn = () => dispatch => {
  axios
    .get("/login")
    .then(res => {
      console.log("this is response", res);
      sessionStorage.setItem("requestToken", res.data.request_token);
      const requestToken = sessionStorage.getItem("requestToken");
      console.log("this should be requestToken", requestToken);
      dispatch({
        type: LOG_IN,
        payload: res.data.results
      });
    })
    .catch(err => {
      console.log(err);
    });
};
