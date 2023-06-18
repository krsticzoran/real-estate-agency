import React from "react";
import DropdownMenu from "./DropdownMenu";
import { menuList } from "../../assets/data/myData";
import { Link } from "react-router-dom";

import "./header.css";

const Navbar: React.FC = () => {
  return (
    <ul className="navbar-expand-lg navbar-nav d-flex flex-row navbar-padding ">
      <li className="nav-item px-3 position-relative">
        <Link
          className="nav-link navbar-link "
          to="/rent"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Rent
          <span className="dropdown-indicator"></span>
        </Link>
        <DropdownMenu onData={menuList} page="rent" />
      </li>
      <li className="nav-item px-3 position-relative">
        <Link
          className="nav-link navbar-link"
          to="/sales"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sales
          <span className="dropdown-indicator"></span>
        </Link>
        <DropdownMenu onData={menuList} page="sales" />
      </li>
      <li className="nav-item px-3">
        <Link className="nav-link navbar-link" to="/team">
          Team
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link className="nav-link navbar-link" to="/blog">
          Blog
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link className="nav-link navbar-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
