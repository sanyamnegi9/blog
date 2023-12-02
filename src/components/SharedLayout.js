import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
