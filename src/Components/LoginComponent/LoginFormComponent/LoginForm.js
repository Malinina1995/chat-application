import React from 'react';
import './LoginForm.css';
import { Field } from "redux-form";

export let LoginForm = (props) => {
  return (
      <form className='login-form' onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputEmail4">Login</label>
          <Field component='input' type="text" className="form-control" name='login' placeholder='Введите логин' />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword4">Password</label>
          <Field component='input' type="password" className="form-control" name='password' placeholder='Введите пароль' />
        </div>
        <div className="form-check">
          <Field component='input' className="form-check-input" name='rememberMe' type="checkbox"/>
          <label className="form-check-label" htmlFor="gridCheck">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary button-login">Login</button>
      </form>
  )
}