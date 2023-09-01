import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../../assets/images/footer/logo-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { menuList } from "../../assets/data/myData";
import { Blog } from "../../types";
import { gql, useQuery } from "@apollo/client";

const GET_BLOGS = gql`
  query {
    blogList {
      title
      img
    }
  }
`;

const FooterTop: FC = () => {
  const { data } = useQuery(GET_BLOGS, {
    context: { clientName: "endpoint3" },
  });

  const dataBlog = data?.blogList ?? [];

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
                <Link to="/contact">Contact Us</Link>
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
              {dataBlog.slice(0, 4).map((blog: Blog) => (
                <li key={blog.title} className="blog-li">
                  <Link
                    to={`/blog/${blog.title.replace(/\s+/g, "-")}`}
                    className="d-flex"
                  >
                    <img src={blog.img} alt={blog.title} />
                    <p className="truncate-text">{blog.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FooterTop;
