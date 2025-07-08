import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`layout-container ${className}`}>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
