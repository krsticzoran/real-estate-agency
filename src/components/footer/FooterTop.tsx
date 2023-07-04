import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../../assets/images/footer/logo-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { menuList } from "../../assets/data/myData";
import blog1 from "../../assets/images/footer/blog-image-25.jpeg";
import blog2 from "../../assets/images/footer/blog-image-24.jpeg";
import blog3 from "../../assets/images/footer/blog-image-23.jpeg";
import blog4 from "../../assets/images/footer/blog-image-22.jpeg";

const FooterTop: FC = () => {
  return (
    <div className="footer-top">
      <Container>
        <Row>
          <div className="col-12 col-lg-3 mb-3 adress-box">
            <img src={logo} alt="logo" className="footer-logo mb-3" />
            <address>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> Maksima Gorkog 24
                <br />
                Belgrade
              </p>
            </address>
            <div>
              <p>
                <FontAwesomeIcon icon={faPhone} />{" "}
                <Link to="tel:+381652088283">+381652088283</Link>
              </p>
            </div>
            <div>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <Link to="mailto:zorankrstic81@gmail.com">
                  zorankrstic81@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-2 footer-rent mb-3">
            <ul>
              <li>
                <h5 className="footer-title mb-3">Rent</h5>
              </li>
              {menuList.map((item) => (
                <li key={item}>
                  <Link to={`/rent/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-2 footer-rent  mb-3">
            <ul>
              <li>
                <h5 className="footer-title mb-3">Sale</h5>
              </li>
              {menuList.map((item) => (
                <li key={item}>
                  <Link to={`/sale/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-2 footer-rent mb-3">
            <ul>
              <li>
                <h5 className="footer-title mb-3">Other</h5>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 footer-rent  mb-3">
            <ul>
              <li>
                <h5 className="footer-title mb-3">Blog</h5>
              </li>
              <li className="blog-li">
                <Link
                  to="/blog/look-for-when-renting-office-space"
                  className="d-flex "
                >
                  <img src={blog1} alt="office" />
                  <p>Do you currently own an office space</p>
                </Link>
              </li>
              <li className="blog-li">
                <Link to="/blog/annual-awards" className="d-flex">
                  <img src={blog2} alt="awards" />
                  <p>Annual awards for our company in April</p>
                </Link>
              </li>
              <li className="blog-li">
                <Link
                  to="/blog/benefits-of-coworking-office-spaces"
                  className="d-flex"
                >
                  <img src={blog3} alt="coworking office spaces" />
                  <p>Benefits of Coworking Office Spaces</p>
                </Link>
              </li>
              <li className="blog-li">
                <Link
                  to="/blog/thinking-about-moving-property-in-belgrade-heres-everything-you-need-to-know"
                  className="d-flex"
                >
                  <img src={blog4} alt="office" />
                  <p>Thinking About Moving Property In Belgrade?</p>
                </Link>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FooterTop;
