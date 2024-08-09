import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};


export default MainLayout;