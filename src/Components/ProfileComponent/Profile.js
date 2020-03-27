import React  from "react";

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
        saveData={props.saveData}
      />
      <div className="profile_posts">
        <MyPostsContainer />
      </div>
    </div>
  );
}
