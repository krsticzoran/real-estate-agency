import React from "react";
import DropdownMenu from "./DropdownMenu";
import { menuList } from "../../assets/data/myData";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./header.css";
import { useMediaQuery } from "react-responsive";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../../context/AuthContext";

const NavbarComponent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const isSmallScreen = useMediaQuery({ maxWidth: 991 });
  return (
    <Navbar
      expand="lg"
      className={`w-100   ${
        isSmallScreen ? "navbar-container" : "navbar-padding"
      }`}
    >
      <Container
        className={`justify-content-end ${
          isSmallScreen ? " navbar-container-small-screen" : ""
        }`}
      >
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={`navbar-dark ${isSmallScreen ? "btn-home-margin" : ""}`}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`me-auto  my-lg-0 ${
              isSmallScreen ? "navbar--border-top" : ""
            }`}
            navbarScroll
          >
            <DropdownMenu onData={menuList} page="Rent" />
            <DropdownMenu onData={menuList} page="Sale" />
            <Link className="navbar--color-white nav-link" to="/team">
              Team
            </Link>
            <Link className="navbar--color-white nav-link" to="/blog">
              Blog
            </Link>
            <Link className="navbar--color-white nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
          {isAuthenticated === true ? (
            <Link
              className={`navbar--color-white nav-link  ${
                isSmallScreen ? "navbar-login" : ""
              }`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              className={`navbar--color-white nav-link  ${
                isSmallScreen ? "navbar-login" : ""
              }`}
              to="/login"
            >
              Login
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
