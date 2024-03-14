import { Children, FC, ReactNode } from "react";
import background from "../../../assets/images/home/home2.png";
import "./parallax.css";

const ParallaxImg: FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "200px",
      }}
    ></div>
  );
};

export default ParallaxImg;
