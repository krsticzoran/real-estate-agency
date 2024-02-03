import React from "react";
import admin from "../../../assets/images/dashboard/admin.jpeg";
import Form from "react-bootstrap/Form";
import { useMediaQuery } from "react-responsive";

interface HeaderProps {
  isChecked: boolean;
  handleSwitchChange: () => void;
}

const Header: React.FC<HeaderProps> = ({ isChecked, handleSwitchChange }) => {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  return (
    <>
      {isMobile ? (
        ""
      ) : (
        <div className=" d-flex justify-content-between align-items-center dashboard-header ">
          <p className="pt-2">Welcome to RE Belgrade dashboard</p>
          <div className="d-flex align-items-center">
            <Form className="p-5 ">
              <Form.Check
                type="switch"
                id="custom-switch"
                label={isChecked ? "Dark" : "Light"}
                checked={isChecked}
                onChange={handleSwitchChange}
              />
            </Form>
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
