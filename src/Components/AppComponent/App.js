import React, {lazy} from "react";
import {
    Switch,
    Route,
    Redirect, HashRouter
} from "react-router-dom";

import {HeaderContainer} from "../HeaderComponent/HeaderContainer";
import {Nav} from "../NavComponent/Nav";
import {News} from "../NewsComponent/News";
import {Music} from "../MusicComponent/Music";
import {Settings} from "../SettingsComponent/Settings";
import {withSuspense} from "../../hoc/withSuspanse";
import "./App.css";

const ProfileContainer = lazy(() =>
    import("../ProfileComponent/ProfileContainer")
);
const DialogsContainer = lazy(() =>
    import("../DialogsComponent/DialogsContainer")
);
const UsersContainer = lazy(() => import("../UsersComponent/UsersContainer"));
const LoginContainer = lazy(() => import("../LoginComponent/Login"));


export function App(props) {
    return (
        <HashRouter>
            <div className="app container">
                <HeaderContainer/>
                <div className="content">
                    <Nav/>
                    <div className="main-content">
                        <Switch>
                            <Route
                                path="/profile/:userId?"
                                render={withSuspense(ProfileContainer)}
                            />
                            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                            <Route path="/users" render={withSuspense(UsersContainer)}/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path="/login" render={withSuspense(LoginContainer)}/>
                            <Redirect from='/' to='/profile'/>
                        </Switch>
                    </div>
                </div>
            </div>
        </HashRouter>);
}
