import React from "react";
import Navbar from "../../header/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../../footer/Footer";
import Copyright from "../../footer/Copyright";
import ComingSoon from "../../temp/ComingSoon";

export default (props) => {
  return (
    <div className="contact">
      <Navbar />
      <div className="content">
        <div className="contact__left">
          <Sidebar />
        </div>
        <div className="contact__center">
          <ComingSoon />
        </div>
        <div className="contact__right"></div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};
