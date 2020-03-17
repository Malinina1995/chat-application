import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";

import { Users } from "./FindUsers";
import { authRedirect, authRedirectAwaiter } from "../../hoc/AuthRedirect";

import {
  followActionCreator,
  unfollowActionCreator,
  followingInProgressActionCreator,
  getUserThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator
} from "../../reducers/findUsersReducer";
import { Preloader } from "../PreloaderComponent/Preloader";

class FindUsers extends Component {
  componentDidMount() {
    this.props.getUserThunkCreator(this.props.pageSize, this.props.currentPage);
  }

  onCurrentPageCnanged = page => {
    this.props.getUserThunkCreator(this.props.pageSize, page);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            unfollow={this.props.unfollowUserThunkCreator}
            follow={this.props.followUserThunkCreator}
            currentPage={this.props.currentPage}
            onCurrentPageCnanged={this.onCurrentPageCnanged}
            followInProgress={this.props.followInProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    followInProgress: state.friendsPage.followInProgress
  };
};

export let FindUsersContainer = compose(
  connect(
    mapStateToProps,
    {
      follow: followActionCreator,
      unfollow: unfollowActionCreator,
      followingInProgress: followingInProgressActionCreator,
      getUserThunkCreator,
      followUserThunkCreator,
      unfollowUserThunkCreator
    }
  ),
  authRedirectAwaiter,
  authRedirect
)(FindUsers);
