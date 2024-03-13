import { FC } from "react";
import background from "../../../assets/images/home/home2.png";
import "./parallax.css";

const ParallaxImg: FC = () => {
  return (
    <div
      className="parallax-container d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h5>
          Unlock Your Dream Home <br /> Where Every Key Tells a Story
        </h5>
      </div>
    </div>
  );
};

export default ParallaxImg;
