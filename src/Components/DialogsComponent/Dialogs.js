import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import "./Dialogs.css";

import { DialogItem } from './DialogItemComponent/DialogItem';
import { Message } from './MessageComponent/Message';
import { Textarea } from '../../FormControls/FormControls';
import { required, maxLength } from '../../utils/validators/validators';

export function Dialogs(props) {

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

  let addNewMessage = formData => {
    props.addMessage(formData.newMessageText);
  }

  return (
    <div className="message-content">
      <div className="message_dialogs">
        {props.dialogsPage.dialogs.map(dialog => {
          return (
            <DialogItem name={dialog.name} key={dialog.id} path={dialog.id} />
          );
        })}
      </div>
      <div className="message_messages">
        <div className="message_messages-items">
          {props.dialogsPage.messages.map(message => {
            return <Message key={message.id} message={message.message} />;
          })}
        </div>
        <AddMessageReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
}

let maxLength100 = maxLength(100);

const DialogsForm = props => {
  return (
    <form className="message_messages-textarea-send" onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name='newMessageText'
        type="text"
        placeholder="Введите сообщение..."
        aria-label="Search"
        validate={[required, maxLength100]}
      />
      <div>
        <button
          className="btn btn-primary"
        >
          Send
        </button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "addMessage"
})(DialogsForm);
