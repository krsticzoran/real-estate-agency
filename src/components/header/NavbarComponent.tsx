import React from "react";
import DropdownMenu from "./DropdownMenu";
import { menuList } from "../../assets/data/myData";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./header.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className=" navbar-padding w-100    ">
      <Container className="justify-content-end  ">
        <Navbar.Toggle aria-controls="navbarScroll" className="navbar-dark " />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <DropdownMenu onData={menuList} page="Rent" />
            <DropdownMenu onData={menuList} page="Sales" />
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
