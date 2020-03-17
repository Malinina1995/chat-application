import React, { Component } from "react";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";

import "./Message.css";

export function Message(props) {
  return (
    <div className="message_messages-item">
      <img src="https://cdn.pixabay.com/photo/2013/07/13/10/09/ghost-156656_960_720.png" className='message_messages-item-avatar'/>
      {props.message}
    </div>
  );
}
