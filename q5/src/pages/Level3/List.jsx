import React from "react";

export default function List({ todos }) {
  return (
    <div className="todoList">
      <ul class="list-group">
        {todos.map((todo, idx) => (
          <li class="list-group-item" key={idx}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
