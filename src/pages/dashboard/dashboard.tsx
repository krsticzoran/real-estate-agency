import React from "react";
import "./dashboard.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import Menu from "./menu/Menu";
import Header from "./header/Header";
import { Container, Row } from "react-bootstrap";
import ProgressBar from "./progressBar/ProgressBar";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("admin");

    navigate("/");
  };

  return (
    <>
      <Container className="bg-light" style={{ paddingBottom: "20px" }}>
        <Row>
          <Menu logout={logout} />
          <div className="col-lg-10 col-sm-12">
            <Header />
            <ProgressBar />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
