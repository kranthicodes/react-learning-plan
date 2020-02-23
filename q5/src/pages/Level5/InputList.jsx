import React, { Component, Fragment } from "react";
import "./InputList.styles.css";
import List from "./List";
import {
  submitHandler,
  changeHandler,
  fetchList
} from "../../actions/level5.actions";
import { connect } from "react-redux";
class InputL5 extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    const { searchTerm, todos, submitHandler, changeHandler } = this.props;
    return (
      <Fragment>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ minHeight: "100vh" }}
        >
          <div className="container">
            <div className="level2">
              <label>
                {" "}
                <h2 className="display-4">TODO</h2>
              </label>
              <div className="inputForm">
                <input
                  type="text"
                  id="inputField"
                  value={searchTerm}
                  className="form-control"
                  onChange={e => changeHandler(e.target.value)}
                />
                {!searchTerm.length ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      submitHandler(searchTerm);
                    }}
                    disabled
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      submitHandler(searchTerm);
                    }}
                  >
                    Submit
                  </button>
                )}
              </div>
              <span
                style={{ justifySelf: "center", fontSize: "1.4em" }}
                className="mt-4 mb-2"
              >
                Your List
              </span>
              <List />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const stateAsProps = reducers => {
  return {
    searchTerm: reducers.level3Reducer.searchTerm,
    todos: reducers.level3Reducer.todos
  };
};

const actionAsProps = {
  changeHandler,
  submitHandler,
  fetchList
};

export default connect(stateAsProps, actionAsProps)(InputL5);
