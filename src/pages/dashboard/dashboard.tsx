import React from "react";
import "./dashboard.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Menu from "./menu/Menu";
import UnauthorizedAccess from "./unauthorizedAccess/UnauthorizedAccess";

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
        <div className="dashboard-container">
          <Menu logout={logout} />
        </div>
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default Dashboard;
