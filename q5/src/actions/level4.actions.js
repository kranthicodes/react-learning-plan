import {
  HANDLE_INPUT,
  HANDLE_DATE,
  HANDLE_SELECTED_DAY,
  HANDLE_SUBMIT
} from "./types";

export const changeHandler = e => {
  return dispatch => {
    if (e.target.type === "text") {
      let action = {
        type: HANDLE_INPUT,
        data: e.target.value
      };
      dispatch(action);
    } else if (e.target.type === "date") {
      let action = {
        type: HANDLE_DATE,
        data: e.target.value
      };
      //new Date(e.target.value).toLocaleString("en-us", {
      // weekday: "long"
      // })
      dispatch(action);
    } else {
      let action = {
        type: HANDLE_SELECTED_DAY,
        data: e.target.value
      };
      dispatch(action);
      //   console.log(e.target.type);
    }
  };
};
export const submitHandler = (task, day) => {
  console.log(day);
  return dispatch => {
    const newTodo = {
      task: task,
      day: day
    };
    let action = {
      type: HANDLE_SUBMIT,
      data: newTodo
    };
    dispatch(action);
  };
};
