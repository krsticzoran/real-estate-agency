import { FC } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutLeft: FC = () => {
  return (
    <div className="col-md-5 col-sm-12">
      <h4 className="about-us">ABOUT US</h4>
      <h2>Transforming the Commercial Landscape of the City!</h2>
      <p className="about-left-paragraph">
        We strive to provide our clients with the best possible experience when
        starting up or relocating your business. With an extensive database
        dedicated to commercial properties that is updated daily, our team of
        extensively trained commercial specialists, we are the best choice for
        your business!
      </p>
      <Link className="navbar--color-white nav-link" to="/team">
        <Button className="btn btn-about">Read more..</Button>
      </Link>
    </div>
  );
};

export default AboutLeft;
