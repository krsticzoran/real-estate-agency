import { FC } from "react";
import "./footer.css";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer: FC = () => {
  return (
    <>
      <FooterTop />
      <FooterBottom />
    </>
  );
};

export default Footer;
