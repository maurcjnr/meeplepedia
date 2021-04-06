import React from "react";
import Navbar from "../../header/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../../footer/Footer";
import Copyright from "../../footer/Copyright";
import ComingSoon from "../../temp/ComingSoon";

export default (props) => {
  return (
    <div className="posts">
      <Navbar />
      <div className="content">
        <div className="posts__left">
          <Sidebar />
        </div>
        <div className="posts__center">
          <ComingSoon />
        </div>
        <div className="posts__right"></div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};
