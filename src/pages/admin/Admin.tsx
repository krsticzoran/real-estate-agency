import React from "react";
import "./admin.css";
import Cookies from "js-cookie";

const Admin = () => {
  const cookieValue = Cookies.get("admin");
  console.log("Cookie Value:", cookieValue);
  return <div className="admin-container">No data</div>;
};

export default Admin;
