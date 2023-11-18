import React from "react";
import admin from "../../../assets/images/dashboard/admin.jpeg";
const Header = () => {
  return (
    <div className="col-lg-10 col-sm-12 d-flex align-items-center justify-content-end dashboard-header">
      <div className="dash-header-info">
        <span>Henry Jr.</span>
        <p>Admin</p>
      </div>
      <img src={admin} alt="admin" />
    </div>
  );
};

export default Header;
