import React, { FC, ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface ChildrenProps {
  children: ReactNode;
}

const Layout: FC<ChildrenProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
