import React, { FC } from "react";
import "./../dashboard.css";
import logo from "../../../assets/images/header/logo.png";
import { Link } from "react-router-dom";

interface ChildProps {
  logout: () => void;
}

const Menu: FC<ChildProps> = ({ logout }) => {
  return (
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
  );
};

export default Menu;
