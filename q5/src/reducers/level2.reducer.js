import { SEARCH_TERM } from "../actions/types";
let initialState = {
  searchTerm: "Hello from redux"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TERM:
      return { ...state, searchTerm: action.data };
    default:
      return state;
  }
};
