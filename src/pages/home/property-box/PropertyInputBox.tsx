import React from "react";
import "./property-box.css";
import PropertySearch from "./Property-Tab";

const PropertyInputBox: React.FC = () => {
  return (
    <div className="col-md-6 col-sm-12 col-xs-12 d-flex align-content-center flex-wrap property-input-box ">
      <div className="property-input-box-background ">
        <PropertySearch />
      </div>
    </div>
  );
};

export default PropertyInputBox;
