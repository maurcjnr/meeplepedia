import React, { useState } from "react";
import Axios from "axios";
import UserValidation from "../../../validations/UserValidation";
import UserForm from "../../../validations/UserForm";

import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

const FormRegistration = ({ submitForm }) => {
  const [nameReg, setNameReg] = useState("");
  const [birthdayReg, setBirthdayReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      name: nameReg,
      birthday: birthdayReg,
      username: usernameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {});
  };

  const { handleChange, handleSubmit, values, errors } = UserForm(
    submitForm,
    UserValidation,
    register
  );

  return (
    <div className="myaccount__right__register">
      <form onSubmit={handleSubmit} noValidate>
        <h1>Não possui uma conta?</h1>
        <h2>Faça seu cadastro gratuitamente!</h2>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nome completo"
          value={values.name}
          onChange={handleChange}
          onBlur={(e) => {
            setNameReg(e.target.value);
          }}
        />
        {errors.name && (
          <div className="invalid-feedback">
            <WarningRoundedIcon /> <p>{errors.name}</p>
          </div>
        )}

        <input
          id="birthday"
          name="birthday"
          type="date"
          placeholder="Data de nascimento"
          value={values.birthday}
          onChange={handleChange}
          onBlur={(e) => {
            setBirthdayReg(e.target.value);
          }}
        />
        {errors.birthday && (
          <div className="invalid-feedback">
            <WarningRoundedIcon /> <p>{errors.birthday}</p>
          </div>
        )}

        <input
          id="username"
          name="username"
          type="text"
          placeholder="Nome de usuário"
          value={values.username}
          onChange={handleChange}
          onBlur={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        {errors.username && (
          <div className="invalid-feedback">
            <WarningRoundedIcon /> <p>{errors.username}</p>
          </div>
        )}

        <p>
          <a>*</a> Seu nome de usuário é único, é por onde outros usuários iram
          te achar. Deve conter no mínimo 3 caracteres e no máximo 20 caracteres
          e não pode ter espaços.
        </p>

        <input
          id="email"
          name="email"
          type="text"
          placeholder="E-mail"
          value={values.email}
          onChange={handleChange}
          onBlur={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        {errors.email && (
          <div className="invalid-feedback">
            <WarningRoundedIcon /> <p>{errors.email}</p>
          </div>
        )}

        <input
          id="emailConfirmation"
          name="emailConfirmation"
          type="text"
          placeholder="Confirmação do e-mail"
          value={values.emailConfirmation}
          onChange={handleChange}
        />
        {errors.emailConfirmation && (
          <div className="invalid-feedback">
            <WarningRoundedIcon /> <p>{errors.emailConfirmation}</p>
          </div>
        )}

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          value={values.password}
          onChange={handleChange}
          onBlur={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        {errors.password && (
          <div className="invalid-feedback">
            <WarningRoundedIcon /> <p>{errors.password}</p>
          </div>
        )}

        <p>
          <a>*</a> Sua senha deve conter no mínimo 8 caracteres, contendo letras
          minúsculas e maiúsculas, números e símbolos.
        </p>

        <input
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmação da senha"
          value={values.passwordConfirmation}
          onChange={handleChange}
        />
        {errors.passwordConfirmation && (
          <div className="invalid-feedback">
            <WarningRoundedIcon /> <p>{errors.passwordConfirmation}</p>
          </div>
        )}

        <div className="myaccount__right__register__checkbox">
          <div className="myaccount__right__register__checkbox__button">
            <input type="checkbox" id="newsletter" name="newsletter" />
            <label htmlFor="newsletter" className="newsletter">
              <span></span>
            </label>
          </div>
          <div className="myaccount__right__register__checkbox__text">
            Desejo receber informações promocionais da Meeplepedia e de seus
            parceiros.
          </div>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormRegistration;
