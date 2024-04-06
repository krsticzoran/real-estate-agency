import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./backToTopButton.css";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const BackToTopButton: FC = () => {
  return (
    <div className="backToTopButtonContainer">
      <button className="backToTopButton" onClick={handleScrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default BackToTopButton;
