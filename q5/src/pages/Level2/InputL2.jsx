import React, { Component, Fragment } from "react";
import "./AdvInput.styles.css";
import { changeHandler } from "../../actions/level2.actions";
import { connect } from "react-redux";
class InputL2 extends Component {
  render() {
    const { searchTerm, textHandler } = this.props;
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
              <input
                type="text"
                className="form-control"
                value={searchTerm}
                onChange={e => textHandler(e.target.value)}
              />
            </div>
            <span>{searchTerm}</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

const stateAsProps = reducers => {
  return {
    searchTerm: reducers.level2Reducer.searchTerm
  };
};

const actionAsProps = {
  textHandler: changeHandler
};

export default connect(stateAsProps, actionAsProps)(InputL2);
