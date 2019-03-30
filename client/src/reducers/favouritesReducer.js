import {
  GET_FAVOURITES,
  ADD_FAVOURITE,
  DELETE_FAVOURITE
} from "../actions/types";

const initialState = {
  favourites: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FAVOURITES:
    case ADD_FAVOURITE:
    case DELETE_FAVOURITE:
      return {
        ...state,
        favourites: action.payload
      };

    default:
      return state;
  }
}
