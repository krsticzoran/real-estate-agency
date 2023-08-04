import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const ContactPage: React.FC = () => {
  const divStyle = {
    height: "100vh",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div style={divStyle}>
        <p>
          This page is currently under construction. Please check back later for
          updates.
        </p>
      </div>
    </>
  );
};

export default ContactPage;
