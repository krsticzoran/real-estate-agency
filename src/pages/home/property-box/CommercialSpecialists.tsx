import React from "react";
import "./property-box.css";
import AnimatedText from "../../../components/animated/AnimatedText";

const CommercialSpecialists: React.FC = () => {
  return (
    <div className="col-md-6 col-sm-12 col-xs-12 d-flex align-content-sm-start align-content-md-center  flex-wrap">
      <div>
        <h4 className="commercial-h4-text ">
          <AnimatedText text="COMMERCIAL SPECIALISTS" />
        </h4>
        <h1 className="commercial-h1-text">
          <AnimatedText text="Find your next" />
        </h1>
        <h1 className="commercial-h1-text">
          <AnimatedText text="commercial property" />
        </h1>
      </div>
    </div>
  );
};

export default CommercialSpecialists;
