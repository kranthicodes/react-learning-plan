import React, { Fragment } from "react";

export default function ChildFunc({ textHandler }) {
  return (
    <Fragment>
      <input
        type="text"
        className="form-control"
        onChange={e => textHandler(e.target.value)}
      />
    </Fragment>
  );
}
