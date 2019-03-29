import { GET_TV } from "../actions/types";

const initialState = {
  tv: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TV:
      return {
        ...state,
        tv: action.payload
      };
    default:
      return state;
  }
}
