import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
