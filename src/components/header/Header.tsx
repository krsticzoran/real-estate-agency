import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/header/logo.png";
import NavbarComponent from "./NavbarComponent";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className=" p-0 m-0  fixed-top header-background ">
      <div className="d-flex flex-row ">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Logo" />
        </Link>
        <NavbarComponent />
      </div>
    </header>
  );
};

export default Header;
