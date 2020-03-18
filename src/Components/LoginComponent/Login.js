import React from "react";
import "./Login.css";
import { LoginForm } from "./LoginFormComponent/LoginForm";
import { reduxForm } from "redux-form";

export let Login = props => {
  const onSubmit = formData => {
    console.log(formData);
  }
  return (
    <div className="login">
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);
