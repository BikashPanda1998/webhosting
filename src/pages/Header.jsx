import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
    <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <header className="">
    <nav className="navbar navbar-expand-lg">
     
        <NavLink className="navbar-brand" to="/">
          <h4>Host UI</h4>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/service">
                  Our Services
                </NavLink>
              </li>
          </ul>
        </div>
        <div className="functional-buttons">
        <ul>
          <li>
           <Link className="btn btn-outline-light" to="/">
            Log in
           </Link>
          </li>
          <li>
          <Link className="btn btn-outline-light" to="/">
          sign up
          </Link>
          </li>
        </ul>
          </div>
       </nav>
    </header>
    </div>
  );
};
export default Header;
