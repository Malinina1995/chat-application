import React  from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import {LogoutThunkCreatorType} from "./headerConnector";

type HeaderProps = {
    isAuth: boolean | undefined;
    login: string | undefined;
    logoutThunkCreator: LogoutThunkCreatorType
}

export const Header: React.FC<HeaderProps> = ({isAuth, login, logoutThunkCreator}) => {
  return (
    <div className="header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link to="/">IT-community</Link>
      </h5>
      {isAuth ? (
        <div>
          <span className="login-name">{login}</span>
          <button type="button" className="btn btn-outline-primary" onClick={logoutThunkCreator}>
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
