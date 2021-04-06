import { useState, useEffect } from "react";
import Axios from "axios";

const UserForm = (callback, UserValidation, register) => {
  const [users, setUsers] = useState([]);

  const [values, setValues] = useState({
    name: "",
    birthday: "",
    username: "",
    email: "",
    emailConfirmation: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/check/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    var usernameForm = true;
    var emailForm = true;

    users.map((user) => {
      if (user.username == values.username) {
        usernameForm = false;
      }

      if (user.email == values.email) {
        emailForm = false;
      }
    });

    const usernameCheckForm = usernameForm;
    const emailCheckForm = emailForm;

    setErrors(UserValidation(values, usernameCheckForm, emailCheckForm));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      register();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default UserForm;
