import React, {Component, ComponentType} from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";

import { Profile } from "./Profile";
import { Preloader } from "../PreloaderComponent/Preloader";
import { authRedirect, authRedirectAwaiter } from "../../hoc/AuthRedirect";
import {
  GetUserHandler,
  GetUserStatusHandler,
  profileConnector, SaveDataHandler,
  SavePhotoHandler,
  UpdateUserStatusHandler
} from "./profileConnector";
import {ProfileType} from "../../types";

type ProfileContainerProps = {
  profile: ProfileType | undefined;
  status: string;
  logUserId: number;
  isAuth: boolean | undefined;
  getUserThunkCreator: GetUserHandler;
  getUserStatusThunkCreator: GetUserStatusHandler;
  updateUserStatusThunkCreator: UpdateUserStatusHandler;
  savePhotoThunkCreator: SavePhotoHandler;
  saveDataThunkCreator: SaveDataHandler;
} & RouteComponentProps<MatchParams>;

interface MatchParams {
  userId: string;
}

class ProfileContainer extends Component<ProfileContainerProps> {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: ProfileContainerProps, prevState: ProfileContainerProps) {
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.refreshProfile();
    }
  }

  refreshProfile() {
    let userId = this.props.match.params.userId
      ? +this.props.match.params.userId
      : this.props.logUserId;
    this.props.getUserThunkCreator(userId);
    this.props.getUserStatusThunkCreator(userId);
  }

  render() {
    const isOwner = !this.props.match.params.userId;
    return (
      <>
        {!this.props.profile ? (
          <Preloader />
        ) : (
            <Profile
              {...this.props}
              isOwner={isOwner}
            />
        )}
      </>
    );
  }
}


export default compose<ComponentType<ProfileContainer>>(
    profileConnector,
  withRouter,
  authRedirectAwaiter,
  authRedirect
)(ProfileContainer);
