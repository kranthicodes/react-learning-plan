import { SEARCH_TERM } from "../actions/types";

export const changeHandler = text => {
  // console.log(text);
  return dispatch => {
    let action = {
      type: SEARCH_TERM,
      data: text
    };
    dispatch(action);
  };
//   this.setState({ textField: text });
};
