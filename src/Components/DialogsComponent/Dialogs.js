import React, { Component } from "react";
import { render } from "react-dom";
import { NavLink, Redirect } from "react-router-dom";

import "./Dialogs.css";

import { DialogItem } from "./DialogItemComponent/DialogItem";
import { Message } from "./MessageComponent/Message";

export function Dialogs(props) {

  let onAddMessage = () => {
    props.addMessage();
  };

  let onChangeMessageText = event => {
    let text = event.target.value;
    props.changeMessageText(text);
  };

  if(!props.isAuth){
    return <Redirect to={'/login'}/>
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
        <div className="message_messages-textarea-send">
          <textarea
            className="form-control send-message"
            type="text"
            placeholder="Введите сообщение..."
            aria-label="Search"
            value={props.dialogsPage.newMessageText}
            onChange={onChangeMessageText}
          />
          <div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={onAddMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
