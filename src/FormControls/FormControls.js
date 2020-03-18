import React from 'react';
import './FormControls.css';
var classNames = require('classnames');

export const Textarea = ({input, meta: { touched, error, warning }, placeholder, ...props}) => {
  const hasError =  touched && error;
  const classesForTextarea = classNames({
    'form-control': true,
    'send-message': true,
    'errorTextarea': hasError
  });

  return (
    <>
    <textarea className={classesForTextarea} placeholder={placeholder} {...input} {...props}/>
    {
      hasError && <span className='errorSpan'>{error}</span>
    }
    </>
  )
}