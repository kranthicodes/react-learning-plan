import React, { Component, Fragment } from "react";
import "./AdvInput.styles.css";
import Child from "./Child";
export default class Parent extends Component {
  state = {
    textField: "",
    user: "",
    todos: [],
    users: ["Mayur", "Aditya", "Rahul", "Divyam", "Pramod"]
  };
  componentDidMount() {
    this.setState({
      user: this.state.users[0]
    });
  }
  changeHandler = e => {
    if (e.target.type === "text") {
      this.setState({ textField: e.target.value });
    } else if (e.target.type === "select-one") {
      this.setState({
        user: e.target.value
      });
    } else {
      // this.setState({ selectedDay: e.target.value });
      //   console.log(e.target.type);
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
    const { textField, todos, users } = this.state;
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
                <ul class="list-group">
                  {todos.length ? (
                    todos.map((todo, idx) => {
                      return (
                        <li class="list-group-item" key={idx}>
                          {todo.task} - {todo.user}
                        </li>
                      );
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
