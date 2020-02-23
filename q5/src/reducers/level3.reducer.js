import { SEARCH_TERM, HANDLE_SUBMIT } from "../actions/types";
let initialState = {
  searchTerm: "",
  todos: [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "facilisis ac facilisis"
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TERM:
      return { ...state, searchTerm: action.data };
    case HANDLE_SUBMIT:
      return { ...state, todos: [...state.todos, action.data], searchTerm: "" };
    default:
      return state;
  }
};
