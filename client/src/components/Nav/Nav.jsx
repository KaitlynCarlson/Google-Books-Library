import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="Nav">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/discover">
              Discover
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/library">
              Library
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
