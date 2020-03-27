import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Users } from "./Users";
import { authRedirect, authRedirectAwaiter } from "../../hoc/AuthRedirect";

import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowInProgress
} from "../../reducers/users-selector";

import {
  followActionCreator,
  unfollowActionCreator,
  followingInProgressActionCreator,
  getUserThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator
} from "../../reducers/usersReducer";
import { Preloader } from "../PreloaderComponent/Preloader";

class UsersContainer extends Component {
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followInProgress: getFollowInProgress(state)
  };
};

export default compose(
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
)(UsersContainer);
