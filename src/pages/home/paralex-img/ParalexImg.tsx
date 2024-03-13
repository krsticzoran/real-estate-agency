import { FC } from "react";
import backgroungd from "../../../assets/images/home/home2.png";
import "./paralex.css";

const ParalexImg: FC = () => {
  return (
    <div className="paralex-container">
      <img src={backgroungd} alt="banner" className=" img-fluid" />
      <p>nesto</p>
    </div>
  );
};

export default ParalexImg;
