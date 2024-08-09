import React from "react";
import Navbar from "../Navbar";

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};


export default MainLayout;