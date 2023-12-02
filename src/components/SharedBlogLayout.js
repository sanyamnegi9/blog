import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const SharedBlogLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedBlogLayout;
