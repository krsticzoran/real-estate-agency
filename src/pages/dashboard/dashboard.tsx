import React from "react";
import "./dashboard.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import Menu from "./menu/Menu";
import Header from "./header/Header";
import UnauthorizedAccess from "./unauthorizedAccess/UnauthorizedAccess";
import { Container, Row } from "react-bootstrap";
import ProgressBar from "./progressBar/ProgressBar";
import { useIsValidToken } from "../../hook/useIsAdmin";

const Dashboard = () => {
  const navigate = useNavigate();
  const isAdminAuthenticated = useIsValidToken();

  const logout = () => {
    Cookies.remove("admin");

    navigate("/");
  };

  return (
    <>
      {isAdminAuthenticated ? (
        <Container className="bg-light" style={{ paddingBottom: "20px" }}>
          <Row>
            <Menu logout={logout} />
            <div className="col-lg-10 col-sm-12">
              <Header />
              <ProgressBar />
            </div>
          </Row>
        </Container>
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default Dashboard;
