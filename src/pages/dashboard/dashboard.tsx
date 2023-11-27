import React, { useState } from "react";
import "./dashboard.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Menu from "./menu/Menu";
import Header from "./header/Header";
import UnauthorizedAccess from "./unauthorizedAccess/UnauthorizedAccess";
import { Container, Row } from "react-bootstrap";
import ProgressBar from "./progressBar/ProgressBar";

const Dashboard = () => {
  const navigate = useNavigate();
  const isAdminAuthenticated = Cookies.get("admin") === "admin123456";
  const { setAuthenticated } = useAuth();

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const logout = () => {
    Cookies.remove("admin");
    setAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      {isAdminAuthenticated ? (
        <Container className={isChecked ? "bg-dark" : "bg-light"}>
          <Row>
            <Menu logout={logout} />
            <Header
              isChecked={isChecked}
              handleSwitchChange={handleSwitchChange}
            />
          </Row>
          <ProgressBar />
        </Container>
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default Dashboard;
