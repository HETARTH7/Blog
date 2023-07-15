import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/view"} className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">
                New Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
