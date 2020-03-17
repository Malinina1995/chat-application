import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";

import { Profile } from "./Profile";
import {
  getUserThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator
} from "../../reducers/profileReducer";
import { Preloader } from "../PreloaderComponent/Preloader";
import { authRedirect, authRedirectAwaiter } from "../../hoc/AuthRedirect";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : 2;
    this.props.getUserThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }

  render() {
    return (
      <>
        {!this.props.profile ? (
          <Preloader />
        ) : (
          <div>
            <Profile
              {...this.props}
              profile={this.props.profile}
              status={this.props.status}
              updateUserStatus={this.props.updateUserStatusThunkCreator}
            />
          </div>
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};

export let ProfilesContainer = compose(
  connect(
    mapStateToProps,
    {
      getUserThunkCreator,
      getUserStatusThunkCreator,
      updateUserStatusThunkCreator
    }
  ),
  withRouter,
  authRedirectAwaiter,
  authRedirect
)(ProfileContainer);
