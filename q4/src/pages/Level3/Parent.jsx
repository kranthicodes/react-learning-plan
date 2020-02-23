import React, { Component, Fragment } from "react";
import "./AdvInput.styles.css";
import Child from "./Child";
export default class Parent extends Component {
  state = {
    textField: "",
    user: "",
    selectedUser: "",
    todos: [],
    users: ["Mayur", "Aditya", "Rahul", "Divyam", "Pramod"]
  };
  componentDidMount() {
    this.setState({
      user: this.state.users[0],
      selectedUser: this.state.users[0]
    });
  }
  changeHandler = e => {
    if (e.target.type === "text") {
      this.setState({ textField: e.target.value });
    } else if (
      e.target.type === "select-one" &&
      e.target.id === "select-form"
    ) {
      this.setState({
        user: e.target.value
      });
    } else {
      // this.setState({ selectedDay: e.target.value });
      this.setState({
        selectedUser: e.target.value
      });
    }
  };
  submitHandler = () => {
    if (this.state.textField === "") {
      alert("Input cannot be empty");
    } else {
      const newTodo = {
        task: this.state.textField,
        user: this.state.user
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        textField: ""
      });
      window.document.getElementById("inputField").value = "";
    }
  };
  render() {
    const { todos, users, selectedUser, textField } = this.state;
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
              <Child
                changeHandler={this.changeHandler}
                submitHandler={this.submitHandler}
                users={users}
                textField={textField}
              />

              <div className="todoList mt-2">
                <div className="span-filter">
                  <span className="mt-2 mb-2 listSpan">Your List</span>
                  <select
                    className="form-control listSelect"
                    onChange={e => this.changeHandler(e)}
                  >
                    {users.map((user, idx) => (
                      <option key={idx} value={user}>
                        {user}
                      </option>
                    ))}
                  </select>
                </div>
                <ul class="list-group">
                  {todos.length ? (
                    todos.map((todo, idx) => {
                      if (todo.user === selectedUser) {
                        return (
                          <li class="list-group-item" key={idx}>
                            {todo.task} - {todo.user}
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
                        textIndent: "1em"
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
