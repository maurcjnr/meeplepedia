import React, { useState, useEffect } from "react";
import Axios from "axios";

export default (props) => {
  const [showLinks, setShowLinks] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus("Usuário logado: " + response.data.user[0].username);
      } else {
        setLoginStatus("Minha Conta");
      }
    });
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__icon">
          <a className="navbar__icon__image" href="/home"></a>
        </div>
        <div className="navbar__left">
          <div className="navbar__left__links" id={showLinks ? "hidden" : ""}>
            <a
              href="/home"
              id={window.location.pathname == "/home" ? "active" : ""}
            >
              Início
            </a>
            <a
              href="/about"
              id={window.location.pathname == "/about" ? "active" : ""}
            >
              Sobre
            </a>
            <a
              href="/contact"
              id={window.location.pathname == "/contact" ? "active" : ""}
            >
              Contato
            </a>
            <a
              href="/support"
              id={window.location.pathname == "/support" ? "active" : ""}
            >
              Suporte
            </a>
            <a
              href="/myaccount"
              id={window.location.pathname == "/myaccount" ? "active" : ""}
              className="navbar__left__links__my-account"
            >
              {loginStatus}
            </a>
          </div>
          <div className="navbar__left__button">
            <input type="checkbox" id="check" />
            <label htmlFor="check" onClick={() => setShowLinks(!showLinks)}>
              <div className="btn1" id="btn1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </label>
          </div>
        </div>
        <div className="navbar__right">
          <input type="text" placeholder="gameID, usuário ou nome do jogo" />
          <button>Buscar</button>
        </div>
      </div>
    </div>
  );
};
