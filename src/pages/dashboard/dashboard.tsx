import React from "react";
import "./dashboard.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/header/logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
          <div className="dashboard-menu col-lg-2 col-sm-12">
            <Link to="/" className="">
              <img src={logo} alt="Logo" />
            </Link>
            <button>Dashboard</button>
            <button>Properties</button>
            <button>Blog Post</button>
            <button>Team Member</button>
            <button>Manage Users</button>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      ) : (
        <div className="back-home-container">
          <div className="text-danger">This page isn't allowed !!!</div>
          <Button className="back-home-btn">
            <Link to="/" className="back-home-link">
              Back to Home
            </Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default Dashboard;
