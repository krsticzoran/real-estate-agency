import { FC } from "react";
import img1 from "../../../assets/images/home/benefit01.png";
import img2 from "../../../assets/images/home/benefit02.png";
import img3 from "../../../assets/images/home/benefit03.png";

const AboutRight: FC = () => {
  return (
    <div className="col-md-7 col-sm-12 about-right-box">
      <div className="right-box">
        <div className="right-item ">
          <div className="right-img-box">
            <img src={img1} alt="benefit" className="right-img" />
          </div>
          <div className="right-text-box">
            <h3 className="right-title">Local Knowledge</h3>
            <p className="right-text mt-1">
              Led by Locals who love Belgrade and what they do.
            </p>
          </div>
        </div>
        <div className="right-item">
          <div className="right-img-box">
            <img src={img2} alt="benefit" className="right-img" />
          </div>
          <div className="right-text-box">
            <h3 className="right-title">Expert Team</h3>
            <p className="right-text mt-1">
              Our team of Commercial Specialists are exstensively trained and
              given the best resources to help you on your search.
            </p>
          </div>
        </div>
      </div>
      <div className="right-box mt-md-5 mt-md-0">
        <div className="right-item ">
          <div className="right-img-box">
            <img src={img3} alt="benefit" className="right-img" />
          </div>
          <div className="right-text-box">
            <h3 className="right-title">Specialising in Commercial Property</h3>
            <p className="right-text mt-1">
              We specialize in all types of commercial properties ranging from
              offices, retail, industry, hospitality, catering & more.
            </p>
          </div>
        </div>
        <div className="right-item">
          <div className="right-img-box">
            <img src={img1} alt="benefit" className="right-img" />
          </div>
          <div className="right-text-box">
            <h3 className="right-title">Trusted Partners</h3>
            <p className="right-text mt-1">
              Trusted by many local and international businesses in finding
              their locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRight;
