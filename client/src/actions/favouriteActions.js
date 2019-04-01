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
    .then(res => {
      dispatch({
        type: GET_FAVOURITES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addFavourite = (addMovie, user) => (dispatch, getState) => {
  axios
    .post("/favourites", { addMovie, user }, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_FAVOURITE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteFavourite = (itemID, user) => (dispatch, getState) => {
  axios
    .delete(`/favourites/${itemID}/${user}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_FAVOURITE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: FAVOURITES_LOADING
  };
};
