import React, { useState, useEffect } from "react";
import Axios from "axios";

export default (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [RPGSystems, setRPGSystems] = useState([]);
  const [newName, setNewName] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setRPGSystems(response.data);
    });
  }, []);

  const submitRPGSystem = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name: name,
      gender: gender,
    });

    setRPGSystems([
      ...RPGSystems,
      {
        name: name,
        gender: gender,
      },
    ]);
  };

  const deleteRPGSystem = (RPGSystem) => {
    Axios.delete(`http://localhost:3001/api/delete/${RPGSystem}`);
  };

  const updateRPGSystem = (id) => {
    Axios.put("http://localhost:3001/api/update", {
      id: id,
      name: newName,
    });

    setNewName("");
  };

  return (
    <div className="admin">
      <div className="registerForm">
        <h1>Sitemas de RPG</h1>
        <input
          type="text"
          name="rpgName"
          placeholder="Nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="rpgGender"
          placeholder="Gênero"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />

        <button onClick={submitRPGSystem}>Enviar</button>
      </div>
      <div className="systems">
        <div className="systems__table">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Gênero</th>
                <th></th>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {RPGSystems.map((val) => {
                return (
                  <tr>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => {
                          setNewName(e.target.value);
                        }}
                      />
                    </td>
                    <td>{val.gender}</td>
                    <td>
                      <button
                        onClick={() => {
                          updateRPGSystem(val.id);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          deleteRPGSystem(val.id);
                        }}
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
