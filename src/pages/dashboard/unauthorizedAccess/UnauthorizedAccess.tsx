import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./../dashboard.css";

const UnauthorizedAccess = () => {
  return (
    <div className="back-home-container">
      <div className="text-danger">This page isn't allowed !!!</div>
      <Button className="back-home-btn">
        <Link to="/" className="back-home-link">
          Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default UnauthorizedAccess;
