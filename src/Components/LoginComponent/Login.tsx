import React from "react";
import "./Login.css";
import { LoginForm } from "./LoginFormComponent/LoginForm";
import { reduxForm } from "redux-form";
import { Redirect } from 'react-router-dom';
import {LoginThunkCreatorHandler, loginConnector} from "./loginConnector";

type Props = {
  isAuth: boolean | undefined;
  captchaUrl: string | undefined;
  loginThunkCreator: LoginThunkCreatorHandler;
}

export type LoginFormData = {
  login: string;
  password: string;
  rememberMe: boolean;
  captcha: string
}

export type LoginFormType = {
  captchaUrl: string | undefined
};

const Login: React.FC<Props> = ({isAuth,captchaUrl, loginThunkCreator}) => {
  const onSubmit = (formData: LoginFormData) => {
    loginThunkCreator(formData.login, formData.password, formData.rememberMe, formData.captcha);
  }

  if(isAuth){
    return <Redirect to='/profile'/>
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
  );
};

const LoginReduxForm = reduxForm<LoginFormData, LoginFormType>({
  form: "login"
})(LoginForm);

export default loginConnector(Login);
