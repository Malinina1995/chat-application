import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { HeaderContainer } from "../HeaderComponent/HeaderContainer";
import { Nav } from "../NavComponent/Nav";
import { ProfilesContainer } from "../ProfileComponent/ProfileContainer";
import { DialogsContainer } from "../DialogsComponent/DialogsContainer";
import { News } from "../NewsComponent/News";
import { Music } from "../MusicComponent/Music";
import { Settings } from "../SettingsComponent/Settings";
import { FindUsersContainer } from "../FindUsersComponent/FindUsersContainer";
import { Login } from "../LoginComponent/Login";

import "./App.css";

export function App(props) {
  return (
    <Router>
      <div className="app container">
        <HeaderContainer />
        <div className="content">
          <Nav />
          <div className="main-content">
            <Switch>
              <Route path="/profile/:userId?" component={ProfilesContainer} />
              <Route path="/dialogs" component={DialogsContainer} />
              <Route path="/users" component={FindUsersContainer} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
