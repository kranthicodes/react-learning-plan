import {
  SEARCH_TERM,
  HANDLE_SUBMIT,
  FETCH_LIST,
  SET_LOADING,
  UNSET_LOADING
} from "../actions/types";
import axios from "axios";

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

export const fetchList = () => {
  return dispatch => {
    dispatch({ type: SET_LOADING });
    setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos`
        );

        let action = {
          type: FETCH_LIST,
          data: res.data
        };
        dispatch(action);
      } catch (error) {
        //   setLoading();
        dispatch({ type: UNSET_LOADING });
      }
    }, 2000);

    //   this.setState({ textField: text });
  };
};
const setLoading = () => dispatch => dispatch({ type: SET_LOADING });
