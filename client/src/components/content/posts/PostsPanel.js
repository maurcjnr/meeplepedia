import React from "react";
import Navbar from "../../header/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../../footer/Footer";
import Copyright from "../../footer/Copyright";

export default (props) => {
  return (
    <div className="posts-panel">
      <Navbar />
      <div className="content">
        <div className="posts-panel__left">
          <Sidebar />
        </div>
        <div className="posts-panel__center"></div>
        <div className="posts-panel__right"></div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};
