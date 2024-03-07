import React, { FC } from "react";
import "./../dashboard.css";
import logo from "../../../assets/images/header/logo.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Container, Nav, Navbar } from "react-bootstrap";

interface ChildProps {
  logout: () => void;
}

const commonStyle = {
  cursor: "pointer",
  textDecoration: "none",
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  color: "rgba( 0,0,0 , 0.65)",
  padding: "0",
};

const Menu: FC<ChildProps> = ({ logout }) => {
  const isMobile = useMediaQuery({ maxWidth: 992 });

  return (
    <>
      {isMobile ? (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  as={Link}
                  to="/dashboard/add-property"
                  className="mt-3"
                >
                  Add Property
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard/items-all">
                  {" "}
                  Delete Property
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <button onClick={logout} style={commonStyle}>
                    Logout
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <div className="dashboard-menu col-lg-2 col-sm-12 ">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

          <Link
            to={"/dashboard/add-property"}
            className="btn border border-secondary mt-4"
          >
            Add Property
          </Link>

          <Link
            to="/dashboard/items-all"
            className="btn border border-secondary  mt-1"
          >
            Delete Property
          </Link>

          <button onClick={logout} className="btn border border-secondary mt-1">
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Menu;
