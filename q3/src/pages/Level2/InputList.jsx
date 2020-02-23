import React, { Component, Fragment } from "react";
import "./InputList.styles.css";
export default class Input extends Component {
  state = {
    textField: "",
    todos: [
      "Cras justo odio",
      "Dapibus ac facilisis in",
      "facilisis ac facilisis"
    ]
  };
  changeHandler = e => {
    this.setState({ textField: e.target.value });
  };
  submitHandler = () => {
    if (this.state.textField === "") {
      alert("Input cannot be empty");
    } else {
      this.setState({
        todos: [...this.state.todos, this.state.textField],
        textField: ""
      });
      window.document.getElementById("inputField").value = "";
    }
  };
  render() {
    const { textField, todos } = this.state;
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
                  className="form-control"
                  onChange={this.changeHandler}
                />
                {!textField.length ? (
                  <button
                    className="btn btn-primary"
                    onClick={this.submitHandler}
                    disabled
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={this.submitHandler}
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
              <div className="todoList">
                <ul class="list-group">
                  {todos.map((todo, idx) => (
                    <li class="list-group-item" key={idx}>
                      {todo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
