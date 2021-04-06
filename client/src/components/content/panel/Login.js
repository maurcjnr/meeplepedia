import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../../header/Navbar";
import Footer from "../../footer/Footer";
import Copyright from "../../footer/Copyright";
import MyAccount from "./MyAccount";
import Panel from "./Panel";

export default (props) => {
  const [sessionStatus, setSessionStatus] = useState("");
  var loginSession;

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setSessionStatus(true);
      } else {
        setSessionStatus(false);
      }
    });
  }, []);

  if (sessionStatus) {
    loginSession = <Panel />;
  } else {
    loginSession = <MyAccount />;
  }

  return (
    <div className="login">
      <Navbar />
      {loginSession}
      <Footer />
      <Copyright />
    </div>
  );
};
