import React from "react";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner";
import { fetchList } from "../../actions/level5.actions";
function List({ todos, loading, fetchList }) {
  console.log(todos);
  if (loading) {
    return <Spinner />;
  } else {
    if (todos.length) {
      return (
        <div className="todoList">
          <ul class="list-group">
            {todos.map((todo, idx) => (
              <li class="list-group-item" key={idx}>
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            width: "50%",
            justifySelf: "center"
          }}
        >
          <button
            className="btn btn-danger"
            style={{ width: "40%", justifySelf: "center" }}
            onClick={() => fetchList()}
          >
            Retry
          </button>
        </div>
      );
    }
  }
}

const stateAsProps = reducers => {
  return {
    todos: reducers.level5Reducer.todos,
    loading: reducers.level5Reducer.loading
  };
};
const actionAsProps = {
  fetchList
};
export default connect(stateAsProps, actionAsProps)(List);
