import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "redux";


import { Profile } from "./Profile";
import {
  getUserThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
  savePhotoThunkCreator
} from "../../reducers/profileReducer";
import { Preloader } from "../PreloaderComponent/Preloader";
import { authRedirect, authRedirectAwaiter } from "../../hoc/AuthRedirect";

class ProfileContainer extends Component {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.match.params.userId != prevProps.match.params.userId){
      this.refreshProfile();
    }
  }

  refreshProfile() {
    let userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.logUserId;
    this.props.getUserThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }

  render() {
    return (
      <>
        {!this.props.profile ? (
          <Preloader />
        ) : (
            <Profile
              {...this.props}
              profile={this.props.profile}
              status={this.props.status}
              isOwner={!this.props.match.params.userId}
              savePhoto={this.props.savePhotoThunkCreator}
              updateUserStatus={this.props.updateUserStatusThunkCreator}
            />
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    logUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      getUserThunkCreator,
      getUserStatusThunkCreator,
      updateUserStatusThunkCreator,
      savePhotoThunkCreator
    }
  ),
  withRouter,
  authRedirectAwaiter,
  authRedirect
)(ProfileContainer);
