import React, { FC } from "react";
import "./../dashboard.css";
import logo from "../../../assets/images/header/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

interface ChildProps {
  logout: () => void;
}

const Menu: FC<ChildProps> = ({ logout }) => {
  const navigate = useNavigate();
  const handleAddPropertyClick = () => {
    navigate("/dashboard/add-property");
  };

  return (
    <div className="dashboard-menu col-lg-2 col-sm-12">
      <Link to="/" className="">
        <img src={logo} alt="Logo" />
      </Link>
     
      <button onClick={handleAddPropertyClick}>Add Property</button>
     
      
     
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Menu;
