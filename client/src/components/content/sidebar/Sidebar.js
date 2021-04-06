import React, { useState, useEffect } from "react";
import Axios from "axios";
import { SidebarData } from "./SidebarData";

export default (props) => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    Axios.get("https://bgg-json.azurewebsites.net/hot").then((response) => {
      setBoards(response.data);
    });
  }, []);

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="sidebar__list__row"
              id={window.location.pathname == val.link ? "active" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
