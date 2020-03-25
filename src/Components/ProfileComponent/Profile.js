import React, { Component } from "react";
import { render } from "react-dom";

import "./Profile.css";

import { MyPostsContainer } from "./MyPostsComponent/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfoComponent/ProfileInfo";

export function Profile(props) {
  return (
    <div className="profile-content">
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        isOwner={props.isOwner}
        updateUserStatus={props.updateUserStatus}
        savePhoto={props.savePhoto}
      />
      <div className="profile_posts">
        <MyPostsContainer />
      </div>
    </div>
  );
}
