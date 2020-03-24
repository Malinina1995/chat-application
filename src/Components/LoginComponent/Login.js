import React from "react";
import "./Login.css";
import { LoginForm } from "./LoginFormComponent/LoginForm";
import { reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { loginThunkCreator } from '../../reducers/authReducer';
import { Redirect } from 'react-router-dom';

export let Login = props => {
  const onSubmit = formData => {
    props.loginThunkCreator(formData.login, formData.password, formData.rememberMe);
  }

  if(props.isAuth){
    return <Redirect to='/profile'/>
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

export default connect(mapStateToProps, {loginThunkCreator})(Login);
