import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./backToTopButton.css";

const BackToTopButton: FC = () => {
  return (
    <div className="backToTopButtonContainer">
      <button className="backToTopButton">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default BackToTopButton;
