import React from "react";
import "./LoginForm.css";
import {Field, InjectedFormProps} from "redux-form";
import { Input } from "../../../FormControls/FormControls";
import { required } from "../../../utils/validators/validators";
import {LoginFormData, LoginFormType} from "../Login";

type LoginFormTypeProps = React.FC<LoginFormType & InjectedFormProps<LoginFormData, LoginFormType>>;

export let LoginForm: LoginFormTypeProps = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputEmail4">Login</label>
        <Field
          component={Input}
          type="text"
          validate={[required]}
          name="login"
          placeholder="Введите логин"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword4">Password</label>
        <Field
          component={Input}
          type="password"
          validate={[required]}
          name="password"
          placeholder="Введите пароль"
        />
      </div>
      <div className="form-check">
        <Field
          component='input'
          className="form-check-input"
          name="rememberMe"
          type="checkbox"
        />
        <label className="form-check-label" htmlFor="gridCheck">
          Remember me
        </label>
      </div>
      <div className='someError'>{error}</div>
      {
        captchaUrl && <img src={captchaUrl} alt=''/>
      }
      {
        captchaUrl &&
        <Field
          component={Input}
          type="text"
          validate={[required]}
          name="captcha"
          style={{marginTop:'15px'}}
        />
      }
      <button type="submit" className="btn btn-primary button-login">
        Login
      </button>
    </form>
  );
};
