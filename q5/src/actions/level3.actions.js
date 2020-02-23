import { SEARCH_TERM, HANDLE_SUBMIT } from "../actions/types";

export const changeHandler = text => {
  console.log(text);
  return dispatch => {
    let action = {
      type: SEARCH_TERM,
      data: text
    };
    dispatch(action);
  };
  //   this.setState({ textField: text });
};

export const submitHandler = task => {
  console.log(task);

  return dispatch => {
    let action = {
      type: HANDLE_SUBMIT,
      data: task
    };
    dispatch(action);
  };
  //   this.setState({ textField: text });
};
