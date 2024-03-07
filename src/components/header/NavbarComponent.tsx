import React from "react";
import DropdownMenu from "./DropdownMenu";
import { menuList } from "../../assets/data/myData";
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

            <Nav.Link
              className="navbar--color-white nav-link nav-link-hover-mobile"
              href="/team"
            >
              Team
            </Nav.Link>
            <Nav.Link
              className="navbar--color-white nav-link nav-link-hover-mobile"
              href="/blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className="navbar--color-white nav-link nav-link-hover-mobile"
              href="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
          {isAuthenticated === true ? (
            <Nav.Link
              className={`navbar--color-white nav-link  ${
                isSmallScreen
                  ? "navbar-login nav-link-hover-mobile"
                  : "dashboard-login-btn"
              }`}
              href="/dashboard"
            >
              Dashboard
            </Nav.Link>
          ) : (
            <Nav.Link
              className={`navbar--color-white nav-link  ${
                isSmallScreen
                  ? "navbar-login nav-link-hover-mobile"
                  : "dashboard-login-btn"
              }`}
              href="/login"
            >
              Login
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
