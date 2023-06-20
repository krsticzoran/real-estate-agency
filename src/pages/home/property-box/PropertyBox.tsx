import React from "react";
import banner from "../../../assets/images/header-banner.webp";

const PropertyBox: React.FC = () => {
  return (
    <section id="proprety--box-container " className="mt-5">
      <img src={banner} alt="banner" className="mt-4" />;
    </section>
  );
};

export default PropertyBox;
