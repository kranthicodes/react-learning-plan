import React, { Fragment } from "react";
import { connect } from "react-redux";
function Level1({ greeting }) {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="level1">
            <h2 className="display-4">{greeting}</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const stateAsProps = reducers => {
  return {
    greeting: reducers.level1Reducer.greeting
  };
};

export default connect(stateAsProps, null)(Level1);
