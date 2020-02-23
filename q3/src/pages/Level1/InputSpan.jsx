import React, { Component, Fragment } from "react";
import "./Input.styles.css";
export default class Input extends Component {
  state = {
    textField: ""
  };
  changeHandler = e => {
    this.setState({ textField: e.target.value });
  };
  render() {
    const { textField } = this.state;
    return (
      <Fragment>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ minHeight: "100vh" }}
        >
          <div className="container">
            <div className="level1">
              <label>
                {" "}
                <h2 className="display-4">TODO</h2>
              </label>
              <input
                type="text"
                className="form-control"
                onChange={this.changeHandler}
              />
              <span
                style={{ justifySelf: "center", fontSize: "1.4em" }}
                className="mt-4 mb-2"
              >
                You Typed
              </span>
              <span
                style={{
                  padding: "10px",
                  background: "#E9ECEF",
                  width: "70%",
                  justifySelf: "center",
                  textAlign: "center",
                  color: "#353535",
                  fontSize: "1.1em",
                  overflowWrap: "break-word"
                }}
              >
                {textField}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
