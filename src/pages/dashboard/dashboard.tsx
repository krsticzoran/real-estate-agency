import React from "react";
import "./dashboard.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Menu from "./menu/Menu";
import Header from "./header/Header";
import UnauthorizedAccess from "./unauthorizedAccess/UnauthorizedAccess";
import { Container, Row } from "react-bootstrap";

const Dashboard = () => {
  const navigate = useNavigate();
  const isAdminAuthenticated = Cookies.get("admin") === "admin123456";
  const { setAuthenticated } = useAuth();

  const logout = () => {
    Cookies.remove("admin");
    setAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      {isAdminAuthenticated ? (
        <Container>
          <Row>
            <Menu logout={logout} />
            <Header />
          </Row>
        </Container>
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default Dashboard;
