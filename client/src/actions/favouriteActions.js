import {
  GET_FAVOURITES,
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  FAVOURITES_LOADING
} from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getFavourites = user => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get(`/favourites/${user}`)
    .then(res =>
      dispatch({
        type: GET_FAVOURITES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addFavourite = addMovie => (dispatch, getState) => {
  console.log("we got movie object in action creator", addMovie);
  axios
    .post("/favourites", addMovie, tokenConfig(getState))
    .then(
      res => console.log(res)
      // dispatch({
      //   type: ADD_ITEM,
      //   payload: res.data
      // })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: FAVOURITES_LOADING
  };
};
