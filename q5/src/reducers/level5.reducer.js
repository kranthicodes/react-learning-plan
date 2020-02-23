import {
  SEARCH_TERM,
  HANDLE_SUBMIT,
  SET_LOADING,
  FETCH_LIST,
  UNSET_LOADING
} from "../actions/types";
let initialState = {
  searchTerm: "",
  todos: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TERM:
      return { ...state, searchTerm: action.data };
    case HANDLE_SUBMIT:
      return { ...state, todos: [...state.todos, action.data], searchTerm: "" };
    case FETCH_LIST:
      return { ...state, todos: action.data, loading: false };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case UNSET_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
