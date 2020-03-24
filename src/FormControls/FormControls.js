import React from 'react';
import './FormControls.css';
var classNames = require('classnames');

export const Textarea = ({input, meta: { touched, error, warning }, placeholder, ...props}) => {
  const hasError =  touched && error;
  const classesForTextarea = classNames({
    'form-control': true,
    'send-message': true,
    'errorTextarea': hasError,
    'borderColor': !hasError
  });

  return (
    <textarea className={classesForTextarea} placeholder={placeholder} {...input} {...props}/>
  )
}

export const Input = ({input, meta: { touched, error, warning }, placeholder, ...props}) => {
  const hasError =  touched && error;
  const classesForTextarea = classNames({
    'form-control': true,
    'errorTextarea': hasError,
    'borderColor': !hasError
  });

  return (
    <input className={classesForTextarea} placeholder={placeholder} {...input} {...props}/>
  )
}