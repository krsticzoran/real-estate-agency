import React from "react";
import DropdownMenu from "./DropdownMenu";
import { menuList } from "../../assets/data/myData";
import "./header.css";

const Navbar: React.FC = () => {
  return (
    <ul className="navbar-expand-lg navbar-nav d-flex flex-row navbar-padding ">
      <li className="nav-item px-3 position-relative">
        <a
          className="nav-link navbar-link "
          href="/rent"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Rent
          <span className="dropdown-indicator"></span>
        </a>
        <DropdownMenu onData={menuList} page="rent" />
      </li>
      <li className="nav-item px-3 position-relative">
        <a
          className="nav-link navbar-link"
          href="/sales"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sales
          <span className="dropdown-indicator"></span>
        </a>
        <DropdownMenu onData={menuList} page="sales" />
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
