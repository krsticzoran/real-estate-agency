import React from "react";
import admin from "../../../assets/images/dashboard/admin.jpeg";
import { useMediaQuery } from "react-responsive";

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  return (
    <>
      {isMobile ? (
        ""
      ) : (
        <div className=" d-flex justify-content-between align-items-center dashboard-header">
          <p style={{ paddingLeft: "12px", paddingTop: "8px" }}>
            Welcome to RE Belgrade dashboard
          </p>
          <div className="d-flex align-items-center">
            <div className="dash-header-info">
              <span>Henry Jr.</span>
              <p>Admin</p>
            </div>
            <img src={admin} alt="admin" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
