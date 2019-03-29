import { GET_PEOPLE } from "../actions/types";

const initialState = {
  people: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload
      };

    default:
      return state;
  }
}
