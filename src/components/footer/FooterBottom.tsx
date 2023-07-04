import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterBottom: FC = () => {
  return (
    <div className="footer-bottom ">
      <Container className="d-md-flex justify-content-between">
        <div className="copyright">© 2023 ZK. All Rights Reserved.</div>
        <ul className="footer-social  d-flex justify-content-center">
          <li key="facebook">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </Link>
          </li>
          <li key="linkedin">
            <Link
              to="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
        </ul>
        <ul className="d-flex justify-content-end footer-privacy ">
          <li key="privacy">
            <Link to="/privacy-policy" rel="noopener noreferrer">
              Privacy Policy
            </Link>
          </li>
          <li className="footer-space"> | </li>
          <li key="terms">
            <Link to="/terms" rel="noopener noreferrer">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default FooterBottom;
