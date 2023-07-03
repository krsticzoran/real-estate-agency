import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

const FooterBottom: FC = () => {
  return (
    <div className="footer-bottom ">
      <Container className="d-md-flex justify-content-between">
        <div className="copyright">© 2023 ZK. All Rights Reserved.</div>
        <ul className="footer-social  d-flex justify-content-center">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
        <ul className="d-flex justify-content-end footer-privacy ">
          <li>
            <a href="/privacy-policy" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </li>
          <li className="footer-space"> | </li>
          <li>
            <a href="/terms" rel="noopener noreferrer">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default FooterBottom;
