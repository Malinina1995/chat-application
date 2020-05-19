import React from 'react';
import './FormControls.css';
import {BaseFieldProps, WrappedFieldProps} from "redux-form/lib/Field";
let classNames = require('classnames');

export type FieldsProps = ({placeholder: string} & BaseFieldProps) & WrappedFieldProps;

export const Textarea = (props: FieldsProps) => {
  const {meta: { touched, error }, placeholder} = props;
  const hasError =  touched && error;
  const classesForTextarea = classNames({
    'form-control': true,
    'send-message': true,
    'errorTextarea': hasError,
    'borderColor': !hasError
  });

  return (
    <textarea
        className={classesForTextarea}
        placeholder={placeholder}
        {...props.input}
        {...props}
    />
  )
}

export const Input = (props: FieldsProps) => {
  const {meta: { touched, error }, placeholder} = props;
  const hasError =  touched && error;
  const classesForTextarea = classNames({
    'form-control': true,
    'errorTextarea': hasError,
    'borderColor': !hasError
  });

  return (
    <input
        className={classesForTextarea}
        placeholder={placeholder}
        {...props.input}
        {...props}
    />
  )
}

