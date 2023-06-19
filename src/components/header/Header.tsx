import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import NavbarComponent from "./NavbarComponent";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className=" p-0 m-0  sticky header-background ">
      <div className="d-flex flex-row  ">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <NavbarComponent />
      </div>
    </header>
  );
};

export default Header;
