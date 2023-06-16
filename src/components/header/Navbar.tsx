import React from "react";

const Navbar: React.FC = () => {
  return (
    <ul
      className="navbar-expand-lg navbar-nav d-flex flex-row "
      style={{
        paddingTop: "16px",
        paddingRight: "0px",
        paddingBottom: "16px",
        paddingLeft: "53px",
      }}
    >
      <li className="nav-item px-3">
        <a className="nav-link" href="/rent">
          Rent
        </a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link" href="/sales">
          Sales
        </a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link" href="/team">
          Team
        </a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link" href="/blog">
          Blog
        </a>
      </li>
      <li className="nav-item px-3">
        <a className="nav-link" href="/contact">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
