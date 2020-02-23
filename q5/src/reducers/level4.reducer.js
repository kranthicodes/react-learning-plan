import {
  HANDLE_INPUT,
  HANDLE_DATE,
  HANDLE_SELECTED_DAY,
  HANDLE_SUBMIT
} from "../actions/types";
let initialState = {
  searchTerm: "",
  day: "",
  selectedDay: "All",
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT:
      return { ...state, searchTerm: action.data };
    case HANDLE_DATE:
      return { ...state, day: action.data };
    case HANDLE_SELECTED_DAY:
      return { ...state, selectedDay: action.data };
    case HANDLE_SUBMIT:
      console.log(action.data);
      return {
        ...state,
        todos: [...state.todos, action.data],
        textField: ""
      };
    default:
      return state;
  }
};
