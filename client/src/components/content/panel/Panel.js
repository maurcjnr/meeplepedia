import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "../sidebar/Sidebar";

import Admin from "./roles/Admin";
import Moderator from "./roles/Moderator";
import User from "./roles/User";

export default (props) => {
  const [loginStatus, setLoginStatus] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteGame, setFavoriteGame] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      setRole(response.data.user[0].role);
      setId(response.data.user[0].id);
      setName(response.data.user[0].name);
      setBirthday(response.data.user[0].birthday);
      setUsername(response.data.user[0].username);
      setEmail(response.data.user[0].email);
      setFavoriteGame(response.data.user[0].favoriteGame);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(
          "Usuário logado: " +
            response.data.user[0].username +
            " (" +
            response.data.user[0].role +
            ")"
        );
      } else {
        setLoginStatus("Nenhum usuário logado.");
      }
    });
  }, []);

  const logOut = () => {
    Axios.post("http://localhost:3001/logout", {}).then((response) => {
      window.location.reload(false);
    });
  };

  return (
    <div className="content">
      <div className="panel__left">
        <Sidebar />
      </div>
      <div className="panel__center">
        {role == "2" && <Admin />}
        {role == "1" && <Moderator />}
        {role == "0" && <User />}

        <button onClick={logOut}>Deslogar</button>
      </div>
      <div className="panel__right">
        Função: {role} <br></br>
        Id: {id} <br></br>
        Nome: {name} <br></br>
        Aniversário: {birthday} <br></br>
        Usuário: {username} <br></br>
        E-mail: {email} <br></br>
        Jogo favorito: {favoriteGame}
      </div>
    </div>
  );
};
