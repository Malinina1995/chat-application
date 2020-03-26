import React from "react";
import "./ProfileData.css";

export const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <>
      <div>
        <span className="profile_info-title">About me: </span>
        <span>{profile.aboutMe}</span>
      </div>
      <div>
        <span className="profile_info-title">Looking for a job: </span>
        <span>{profile.lookingForAJob ? "yes" : "no"}</span>
      </div>
      {profile.lookingForAJob && (
        <div>
          <span className="profile_info-title">My professional skills: </span>
          <span>{profile.lookingForAJobDescription}</span>
        </div>
      )}
      <div className="profile_info-title">Contacts: </div>
      {Object.keys(profile.contacts).map(key => {
        return (
          <Contacts
            key={key}
            contactsTitle={key}
            contactsValue={profile.contacts[key]}
          />
        );
      })}
      {isOwner &&<div><button className="btn btn-primary" onClick={goToEditMode}>edit</button></div>}
    </>
  );
};

const Contacts = ({ contactsTitle, contactsValue }) => {
  return (
    <div>
      <span className="profile_info-title contacts">{contactsTitle}: </span>
      <span>{contactsValue}</span>
    </div>
  );
};