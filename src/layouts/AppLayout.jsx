import React from "react";
import Navbar from "../components/Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className=" flex">
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
