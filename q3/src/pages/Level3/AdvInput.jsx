import React, { Component, Fragment } from "react";
import "./AdvInput.styles.css";
export default class Input extends Component {
  state = {
    textField: "",
    day: "",
    selectedDay: "All",
    todos: []
  };
  changeHandler = e => {
    if (e.target.type === "text") {
      this.setState({ textField: e.target.value });
    } else if (e.target.type === "date") {
      this.setState({
        day: new Date(e.target.value).toLocaleString("en-us", {
          weekday: "long"
        })
      });
    } else {
      this.setState({ selectedDay: e.target.value });
      //   console.log(e.target.type);
    }
  };
  submitHandler = () => {
    if (this.state.textField === "") {
      alert("Input cannot be empty");
    } else {
      const newTodo = {
        task: this.state.textField,
        day: this.state.day
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        textField: ""
      });
      window.document.getElementById("inputField").value = "";
    }
  };
  render() {
    const { textField, todos, selectedDay, day } = this.state;
    return (
      <Fragment>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ minHeight: "100vh" }}
        >
          <div className="container">
            <div className="level3">
              <label>
                {" "}
                <h2 className="display-4">TODO</h2>
              </label>
              <div className="AdvInputForm">
                <div className="adv-form">
                  <input
                    type="text"
                    id="inputField"
                    className="form-control"
                    placeholder="Enter Your Todo"
                    onChange={this.changeHandler}
                  />
                  <input
                    type="date"
                    id="inputDate"
                    className="form-control"
                    onChange={this.changeHandler}
                  />
                </div>

                {!textField.length ? (
                  <button
                    className="btn btn-primary mt-3"
                    onClick={this.submitHandler}
                    disabled
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="btn btn-primary mt-3"
                    onClick={this.submitHandler}
                  >
                    Submit
                  </button>
                )}
              </div>
              <div className="span-filter">
                <span className="mt-2 mb-2 listSpan">Your List</span>
                <select
                  className="form-control listSelect"
                  onChange={this.changeHandler}
                >
                  <option value="All">All</option>
                  <option value="Sunday">SUN</option>
                  <option value="Monday">MON</option>
                  <option value="Tuesday">TUE</option>
                  <option value="Wednesday">WED</option>
                  <option value="Thursday">THUR</option>
                  <option value="Friday">FRI</option>
                  <option value="Saturday">SAT</option>
                </select>
              </div>
              <div className="todoList">
                <ul class="list-group">
                  {todos.length ? (
                    todos.map((todo, idx) => {
                      if (selectedDay === "All") {
                        return (
                          <li class="list-group-item" key={idx}>
                            {todo.task}
                          </li>
                        );
                      } else if (todo.day === selectedDay) {
                        return (
                          <li class="list-group-item" key={idx}>
                            {todo.task}
                          </li>
                        );
                      }
                    })
                  ) : (
                    <h3
                      className=" mt-4"
                      style={{
                        fontWeight: "lighter",
                        width: "50%",
                        margin: "0 auto",
                        textIndent: "1.5em"
                      }}
                    >
                      Empty list
                    </h3>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
