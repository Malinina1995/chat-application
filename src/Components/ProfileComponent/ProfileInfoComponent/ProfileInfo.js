import React, { Component } from "react";
import { render } from "react-dom";
import { Preloader } from "../../PreloaderComponent/Preloader";

import "./ProfileInfo.css";
import { ProfileStatusWithHooks } from "../ProfileStatus/ProfileStatusWithHooks";

export function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelector = e => {
    if (e.target.value.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  let imagePath = props.profile.photos.large
    ? props.profile.photos.large
    : "https://avatars.mds.yandex.net/get-pdb/1732371/78b3b128-3813-4d35-8b87-b3c911581ca0/s1200?webp=false";
  return (
    <>
      <div className="profile_info">
        <img src={imagePath} className="profile_info-avatar" />
        <div className="profile_information">
          <span className="profile_info-name">{props.profile.fullName}</span>
          <ProfileStatusWithHooks
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
          <span>{props.profile.aboutMe}</span>
          <span>{props.profile.lookingForAJob}</span>
          <span>{props.profile.lookingForAJobDescription}</span>
        </div>
      </div>
      {props.isOwner && (
        <div className="profile_info-addPhoto">
          Update avatar <input type="file" onChange={onMainPhotoSelector}/>
        </div>
      )}
    </>
  );
}
