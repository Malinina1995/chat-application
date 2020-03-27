import React, { useState } from "react";
import { Preloader } from "../../PreloaderComponent/Preloader";

import "./ProfileInfo.css";
import { ProfileStatusWithHooks } from "../ProfileStatus/ProfileStatusWithHooks";
import { ProfileData } from "./ProfileDataComponent/ProfileData";
import { ProfileDataFormReduxForm } from "./ProfileDataForm/ProfileDataForm";

export function ProfileInfo(props) {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelector = e => {
    if (e.target.value.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    props.saveData(formData).then(()=>{
      setEditMode(false);
    })
  };

  let imagePath = props.profile.photos.large
    ? props.profile.photos.large
    : "https://avatars.mds.yandex.net/get-pdb/1732371/78b3b128-3813-4d35-8b87-b3c911581ca0/s1200?webp=false";
  return (
    <>
      <div className="profile_info">
        <div>
          <img src={imagePath} alt='' className="profile_info-avatar" />
        </div>
        <div className="profile_information">
          <span className="profile_info-name">{props.profile.fullName}</span>
          <ProfileStatusWithHooks
            status={props.status}
            isOwner={props.isOwner}
            updateUserStatus={props.updateUserStatus}
          />
          {editMode ? (
            <ProfileDataFormReduxForm
              initialValues={props.profile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileData
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={props.profile}
              isOwner={props.isOwner}
            />
          )}
        </div>
      </div>
      {props.isOwner && (
        <div className="profile_info-addPhoto">
          Update avatar <input type="file" onChange={onMainPhotoSelector} />
        </div>
      )}
    </>
  );
}
