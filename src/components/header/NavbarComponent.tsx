import React from "react";
import DropdownMenu from "./DropdownMenu";
import { menuList } from "../../assets/data/myData";
import Container from "react-bootstrap/Container";
import "./header.css";
import { useMediaQuery } from "react-responsive";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const { isAuthenticated } = useAuth();

  const isSmallScreen = useMediaQuery({ maxWidth: 991 });
  return (
    <Navbar
      collapseOnSelect
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
            {isSmallScreen ? (
              <Nav.Link
                eventKey="14"
                as={Link}
                to="/"
                className="navbar--color-white nav-link nav-link-hover-mobile"
              >
                Home
              </Nav.Link>
            ) : (
              ""
            )}

            <DropdownMenu
              onData={menuList}
              page="Rent"
              eventKey={[6, 7, 8, 9]}
            />
            <DropdownMenu
              onData={menuList}
              page="Sale"
              eventKey={[10, 11, 12, 13]}
            />

            <Nav.Link
              eventKey="1"
              as={Link}
              to="/team"
              className={`navbar--color-white nav-link nav-link-hover-mobile ${
                pathname === "/team" ? "navbar--active-link-classes" : ""
              }`}
            >
              Team
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              as={Link}
              to="/blog"
              className={`navbar--color-white nav-link nav-link-hover-mobile ${
                pathname === "/blog" ? "navbar--active-link-classes" : ""
              }`}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              as={Link}
              to="/contact"
              className={`navbar--color-white nav-link nav-link-hover-mobile ${
                pathname === "/contact" ? "navbar--active-link-classes" : ""
              }`}
            >
              Contact
            </Nav.Link>
          </Nav>

          {isAuthenticated === true ? (
            <Nav.Link
              eventKey="4"
              as={Link}
              to="/dashboard"
              className={`navbar--color-white nav-link  ${
                isSmallScreen
                  ? "navbar-login nav-link-hover-mobile"
                  : "dashboard-login-btn"
              }`}
            >
              Dashboard
            </Nav.Link>
          ) : (
            <Nav.Link
              eventKey="5"
              className={`navbar--color-white nav-link  ${
                isSmallScreen
                  ? "navbar-login nav-link-hover-mobile"
                  : "dashboard-login-btn"
              } ${pathname === "/login" ? "navbar--active-link-classes" : ""}`}
              as={Link}
              to="/login"
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
