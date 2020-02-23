import React, { Component, Fragment } from "react";
export default class ChildClass extends Component {
  render() {
    const { textHandler } = this.props;
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
}
