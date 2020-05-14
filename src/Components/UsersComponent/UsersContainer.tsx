import React, {Component, ComponentType} from "react";
import { compose } from "redux";
import { Users } from "./Users";
import { authRedirect, authRedirectAwaiter } from "../../hoc/AuthRedirect";
import { Preloader } from "../PreloaderComponent/Preloader";
import {usersConnector, UsersPropsFromRedux} from "./usersConnector";

type UsersContainerPropsType = UsersPropsFromRedux & {};

class UsersContainer extends Component<UsersContainerPropsType> {
  componentDidMount() {
    const {getUserThunkCreator, pageSize, currentPage} = this.props;
    getUserThunkCreator(pageSize, currentPage);
  }

  onCurrentPageChanged = (page: number) => {
    const {getUserThunkCreator, pageSize} = this.props;
    getUserThunkCreator(pageSize, page);
  };

  render() {
    const {
      isFetching,
      totalUsersCount,
      users,
      unfollowUserThunkCreator,
      followUserThunkCreator,
      currentPage,
      followInProgress
    } = this.props;
    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={totalUsersCount}
            users={users}
            unfollow={unfollowUserThunkCreator}
            follow={followUserThunkCreator}
            currentPage={currentPage}
            onCurrentPageChanged={this.onCurrentPageChanged}
            followInProgress={followInProgress}
          />
        )}
      </>
    );
  }
}

export default compose<ComponentType<UsersContainer>>(usersConnector,
  authRedirectAwaiter,
  authRedirect
)(UsersContainer);
