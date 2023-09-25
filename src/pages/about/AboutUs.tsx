import { FC } from "react";
import { Container } from "react-bootstrap";

import "./about.css";

const AboutUs: FC = () => {
  return (
    <Container className="container-about">
      <h1>About us</h1>
      <p>
        At REAB, we are passionate about helping you find your dream home in the
        heart of Belgrade. With a rich history and a vibrant real estate market,
        Belgrade offers an array of exciting opportunities for both buyers and
        sellers. Our mission is to guide you through this journey with
        expertise, dedication, and a personal touch.
      </p>
      <h2>Experienced Team, Personal Approach</h2>
      <div>
        <img src="/img/about/about.jpeg" alt="about us" />
      </div>
      <p>
        Our team of experienced real estate professionals is dedicated to
        providing exceptional service tailored to your unique needs. With an
        in-depth understanding of the local market trends and a keen eye for
        quality properties, we are here to help you make informed decisions.
      </p>
      <h2> Discover Your Ideal Home</h2>
      <p>
        {" "}
        Whether you're looking for a cozy apartment in the historic city center,
        a stylish penthouse with stunning views, or a charming family house in
        the peaceful outskirts, we have a wide range of properties to suit your
        preferences. Our listings are carefully curated to ensure that each
        property meets our high standards of quality and value.
      </p>
      <h2> Selling with Confidence</h2>
      <p>
        {" "}
        If you're a homeowner considering selling your property, we're here to
        provide you with comprehensive marketing strategies that will showcase
        your property's best features. From professional photography to
        effective online listings, we know how to attract the right buyers.
      </p>
      <h2>Local Insights, Global Reach</h2>
      <p>
        {" "}
        Belgrade is a dynamic city with diverse neighborhoods, each offering a
        unique living experience. Our team's local expertise allows us to match
        you with the neighborhood that best aligns with your lifestyle and
        preferences. We also understand the importance of global connections,
        and we are proud to offer international exposure for your listings.
      </p>
      <h2>Building Lasting Relationships</h2>
      <p>
        {" "}
        At REAB, we believe in building lasting relationships with our clients.
        Beyond the transaction, we are here to provide ongoing support, advice,
        and resources to ensure your real estate experience is smooth and
        successful.
      </p>
      <h2> Contact Us Today</h2>
      <p>
        {" "}
        Whether you're looking to buy, sell, or simply explore the exciting real
        estate opportunities in Belgrade, we invite you to get in touch with us.
        Our team is ready to assist you every step of the way. Thank you for
        considering REA Belgrade as your trusted partner in your real estate
        journey.
      </p>
    </Container>
  );
};

export default AboutUs;
