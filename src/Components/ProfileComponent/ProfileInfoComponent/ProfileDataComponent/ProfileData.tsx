import React from "react";
import "./ProfileData.css";
import {ContactsType, ProfileType} from "../../../../types";

type ProfileDataPropsType = {
    profile: ProfileType;
    isOwner: boolean;
    goToEditMode: () => void;
}

export const ProfileData: React.FC<ProfileDataPropsType> = (props) => {
    const {profile, isOwner, goToEditMode} = props;
    const contacts = profile.contacts ?? ({} as ContactsType);
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
            <div className="profile_info-title">Contacts:</div>
            {Object.keys(contacts).map(key => {
                return (
                    <Contacts
                        key={key}
                        contactsTitle={key}
                        contactsValue={contacts[key]}
                    />
                );
            })}
            {isOwner && <div>
                <button className="btn btn-primary" onClick={goToEditMode}>edit</button>
            </div>}
        </>
    );
};

type ContactsPropsType = {
    contactsTitle: string;
    contactsValue: string | undefined;
}

const Contacts: React.FC<ContactsPropsType> = ({contactsTitle, contactsValue}) => {
    return (
        <div>
            <span className="profile_info-title contacts">{contactsTitle}: </span>
            <span>{contactsValue}</span>
        </div>
    );
};
