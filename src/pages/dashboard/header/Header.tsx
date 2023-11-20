import React, { useState } from "react";
import admin from "../../../assets/images/dashboard/admin.jpeg";
import Form from "react-bootstrap/Form";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="col-lg-10 col-sm-12 d-flex align-items-center justify-content-end dashboard-header">
      <Form className="p-5">
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
  );
};

export default Header;
