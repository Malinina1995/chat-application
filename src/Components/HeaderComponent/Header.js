import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import "./Header.css";

export function Header(props) {
  return (
    <div className="header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link to="/">IT-community</Link>
      </h5>
      {props.isAuth ? (
        <div>
          <span className="login-name">{props.login}</span>
          <button type="button" className="btn btn-outline-primary" onClick={props.logoutThunkCreator}>
            Logout
          </button>
        </div>
      ) : (
        <Link className="btn btn-outline-primary" to={"/login"}>
          Sign up
        </Link>
      )}
    </div>
  );
}
