import React from "react";

export default function Child({
  changeHandler,
  submitHandler,
  users,
  textField
}) {
  return (
    <div className="AdvInputForm">
      <div className="adv-form">
        <input
          type="text"
          id="inputField"
          className="form-control"
          placeholder="Enter Your Todo"
          onChange={e => changeHandler(e)}
        />
        <select
          className="form-control listSelect"
          id="select-form"
          onChange={e => changeHandler(e)}
        >
          {users.map((user, idx) => (
            <option key={idx} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>
      {!textField.length ? (
        <button
          className="btn btn-primary mt-3"
          onClick={submitHandler}
          disabled
        >
          Submit
        </button>
      ) : (
        <button className="btn btn-primary mt-3" onClick={submitHandler}>
          Submit
        </button>
      )}
    </div>
  );
}
