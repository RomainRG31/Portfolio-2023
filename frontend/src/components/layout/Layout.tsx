import React, { ReactNode } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
