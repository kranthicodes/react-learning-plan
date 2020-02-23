import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="jumbotron jumbotron-fluid" style={{ minHeight: "100vh" }}>
      <div class="container">
        <h1 class="display-4">React Learning Plan</h1>
        <p class="lead">
          You'll find same template for all questions just UX enhancement.
        </p>
        <div className="nav-buttons">
          <Link className="btn btn-primary" to="/level1">
            Level 1
          </Link>

          <Link className="btn btn-primary" to="/level2">
            Level 2
          </Link>

          <Link className="btn btn-primary" to="/level3">
            Level 3
          </Link>
        </div>
      </div>
    </div>
  );
}
