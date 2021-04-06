export default function UserValidation(
  values,
  usernameCheckForm,
  emailCheckForm
) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Campo obrigatório.";
  }

  if (!values.birthday.trim()) {
    errors.birthday = "Campo obrigatório.";
  } else if (values.birthday.length > 10) {
    errors.birthday = "Data inválida.";
  }

  if (!values.username.trim()) {
    errors.username = "Campo obrigatório.";
  } else if (usernameCheckForm == false) {
    errors.username = "Nome de usuário já criado.";
  } else if (values.username.length > 20) {
    errors.username = "Máximo 20 caracteres.";
  } else if (values.username.length < 3) {
    errors.username = "Mínimo 3 caracteres.";
  } else if (/\s/.test(values.username)) {
    errors.username = "Usuário inválido.";
  }

  if (!values.email) {
    errors.email = "Campo obrigatório.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "E-mail inválido.";
  } else if (emailCheckForm == false) {
    errors.email = "E-mail já utilizado.";
  }

  if (!values.emailConfirmation.trim()) {
    errors.emailConfirmation = "Campo obrigatório.";
  } else if (values.emailConfirmation !== values.email) {
    errors.email = "E-mails não são iguais.";
  }

  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if (!values.password.trim()) {
    errors.password = "Campo obrigatório.";
  } else if (!strongRegex.test(values.password)) {
    errors.password = "Senha inválida.";
  }

  if (!values.passwordConfirmation.trim()) {
    errors.passwordConfirmation = "Campo obrigatório.";
  } else if (values.passwordConfirmation !== values.password) {
    errors.password = "Senhas não são iguais.";
  }

  return errors;
}
