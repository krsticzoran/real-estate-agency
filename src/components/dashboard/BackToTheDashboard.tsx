import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackToTheDashboard: FC = () => {
  const buttonStyle = {
    margin: "15px",
    textDecoration: "none",
    padding: "10px 15px",
    backgroundColor: "#5c0282",
    color: "#fff",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "fit-content",
  };

  const iconStyle = {
    marginRight: "5px",
  };

  return (
    <Link to="/dashboard" style={buttonStyle}>
      <FontAwesomeIcon icon={faArrowLeft} style={iconStyle} />
      Back to Dashboard
    </Link>
  );
};

export default BackToTheDashboard;
