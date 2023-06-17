import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";
import "./header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    console.log("click");
  };

  return (
    <header className=" p-0 m-0 navbar navbar-dark bg-dark sticky header-background">
      <div className="d-flex flex-row">
        <a className="navbar-brand p-0 m-0" href="/">
          <img src={logo} alt="Logo" onClick={handleLogoClick} />
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
