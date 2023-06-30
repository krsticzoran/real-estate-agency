import React from "react";
import { Container } from "react-bootstrap";
import banner from "../../../assets/images/home/header-banner.webp";
import CommercialSpecialists from "./CommercialSpecialists";
import PropertySearch from "./PropertySearch";
import "./property-box.css";

const PropertyBox: React.FC = () => {
  return (
    <section id="property--box-container" className="mt-5">
      <img src={banner} alt="banner" className=" img-fluid" />

      <div className="property--box-color align-content-sm-start d-flex align-content-md-center flex-wrap">
        <Container className=" property--box-subcontainer">
          <div className="row">
            <CommercialSpecialists />
            <PropertySearch />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PropertyBox;
