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
import LazyImage from "../optimization/LazyImage";

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
              <p className="footer-top-p-style">
                <FontAwesomeIcon icon={faPhone} />{" "}
                <Link to="tel:+381652088283">+381652088283</Link>
              </p>
            </div>
            <div>
              <p className="footer-top-p-style">
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
                <li key={item} className="footer-top-link-style">
                  <Link
                    to={`/rent/${item.toLowerCase()}`}
                    className="footer-top-link-style"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
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
                <li key={item} className="footer-top-link-style">
                  <Link
                    to={`/sale/${item.toLowerCase()}`}
                    className="footer-top-link-style"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-2 footer-rent mb-3">
            <ul>
              <li>
                <h5 className="footer-title mb-3">Other</h5>
              </li>
              <li className="footer-top-link-style">
                <Link to="/contact" className="footer-top-link-style">
                  Contact Us
                </Link>
              </li>
              <li className="footer-top-link-style">
                <Link to="/about-us" className="footer-top-link-style">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 footer-rent  mb-3">
            <ul>
              <li>
                <h5 className="footer-title mb-3">Blog</h5>
              </li>
              {dataBlog.slice(0, 4).map((blog: Blog) => (
                <li
                  key={blog.title}
                  className="blog-li footer-top-p-style"
                  title={blog.title}
                >
                  <Link
                    to={`/blog/${blog.title.replace(/\s+/g, "-")}`}
                    className="d-flex"
                  >
                    <LazyImage src={blog.img} alt={blog.title} />

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
