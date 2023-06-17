import React from "react";
import "./header.css";

const Navbar: React.FC = () => {
  return (
    <ul className="navbar-expand-lg navbar-nav d-flex flex-row navbar-padding ">
      <li className="nav-item px-3">
        <a className="nav-link navbar-link" href="/rent">
          Rent
          <span className="dropdown-indicator"></span>
        </a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link navbar-link" href="/sales">
          Sales
          <span className="dropdown-indicator"></span>
        </a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link navbar-link" href="/team">
          Team
        </a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link navbar-link" href="/blog">
          Blog
        </a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link navbar-link" href="/contact">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
