import React from "react";
import "./admin.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const Admin = () => {
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
        <div className="admin-container">
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="admin-container">This page isn't allowed</div>
      )}
    </>
  );
};

export default Admin;
