import React, { useState } from "react";
import Axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import RegistrationForm from "./RegistrationForm";
import RegistrationSuccess from "./RegistrationSuccess";

import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

export default (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(response.data.message);
      } else {
        localStorage.setItem("token", response.data.token);
        setLoginStatus(true);
        window.location.reload(false);
      }
    });
  };

  const userAuthenticated = () => {
    Axios.get("http://localhost:3001/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
    });
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="content">
      <div className="myaccount__left">
        <Sidebar />
      </div>
      <div className="myaccount__center">
        <div className="myaccount__center__login">
          <h1>Já possui conta?</h1>
          <h2>Faça seu login aqui.</h2>

          <input
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Usuário"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            onKeyDown={handleKeyDown}
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <p>
            Esqueceu sua senha? <a href="/">Aqui aqui</a>.
          </p>

          <button onClick={login}>Logar</button>
          {loginStatus && (
            <div className="myaccount__center__login__status">
              {loginStatus != true ? <WarningRoundedIcon /> : ""}
              {console.log(loginStatus)}
              <p>{loginStatus}</p>
            </div>
          )}
        </div>
      </div>

      <div className="myaccount_div">
        <div></div>
      </div>

      <div className="myaccount__right">
        {!isSubmitted ? (
          <RegistrationForm submitForm={submitForm} />
        ) : (
          <RegistrationSuccess />
        )}
      </div>
    </div>
  );
};
