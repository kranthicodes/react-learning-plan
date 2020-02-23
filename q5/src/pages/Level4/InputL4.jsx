import React, { Component, Fragment } from "react";
import "./AdvInput.styles.css";
import { connect } from "react-redux";
import { changeHandler, submitHandler } from "../../actions/level4.actions";
class InputL4 extends Component {
  render() {
    const {
      searchTerm,
      todos,
      selectedDay,
      day,
      changeHandler,
      submitHandler
    } = this.props;
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
                    onChange={e => changeHandler(e)}
                  />
                  <input
                    type="date"
                    id="inputDate"
                    className="form-control"
                    onChange={e => changeHandler(e)}
                  />
                </div>

                {!searchTerm.length ? (
                  <button className="btn btn-primary mt-3" disabled>
                    Submit
                  </button>
                ) : (
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => submitHandler(searchTerm, day)}
                  >
                    Submit
                  </button>
                )}
              </div>
              <div className="span-filter">
                <span className="mt-2 mb-2 listSpan">Your List</span>
                <select
                  className="form-control listSelect"
                  onChange={e => changeHandler(e)}
                >
                  <option value="All">All</option>
                  <option value="Today">Today</option>
                  <option value="Previous">Previous</option>
                  <option value="Next">Next</option>
                </select>
              </div>
              <div className="todoList">
                <ul class="list-group">
                  {todos.length ? (
                    todos.map((todo, idx) => {
                      let today = parseInt(new Date().getDate());
                      let todoDay = parseInt(new Date(todo.day).getDate());
                      if (selectedDay === "All") {
                        return (
                          <li class="list-group-item" key={idx}>
                            {todo.task}
                          </li>
                        );
                      } else if (selectedDay === "Today" && today === todoDay) {
                        return (
                          <li class="list-group-item" key={idx}>
                            {todo.task}
                          </li>
                        );
                      } else if (selectedDay === "Next" && today < todoDay) {
                        return (
                          <li class="list-group-item" key={idx}>
                            {todo.task}
                          </li>
                        );
                      } else if (
                        selectedDay === "Previous" &&
                        today > todoDay
                      ) {
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

const stateAsProps = reducers => {
  return {
    searchTerm: reducers.level4Reducer.searchTerm,
    day: reducers.level4Reducer.day,
    selectedDay: reducers.level4Reducer.selectedDay,
    todos: reducers.level4Reducer.todos
  };
};
const actionAsProps = {
  changeHandler,
  submitHandler
};

export default connect(stateAsProps, actionAsProps)(InputL4);
