import React from "react";
import Navbar from "../fragments/Navbar";
import Header from "../fragments/Header";

const LayoutPage = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default LayoutPage;
