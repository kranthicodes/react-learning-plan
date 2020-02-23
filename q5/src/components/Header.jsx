import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        AttainU
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link active" to="/">
            Home
          </Link>
          <Link class="nav-item nav-link" to="/level1">
            Level 1
          </Link>
          <Link class="nav-item nav-link" to="/level2">
            Level 2
          </Link>
          <Link class="nav-item nav-link" to="/level3">
            Level 3
          </Link>
          <Link class="nav-item nav-link" to="/level4">
            Level 4
          </Link>
          <Link class="nav-item nav-link" to="/level5">
            Level 5
          </Link>
        </div>
      </div>
    </nav>
  );
}
