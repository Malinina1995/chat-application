import React from "react";
import "./Profile.css";
import {MyPostsContainer} from "./MyPostsComponent/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfoComponent/ProfileInfo";
import {ProfileType} from "../../types";
import {SaveDataHandler, SavePhotoHandler, UpdateUserStatusHandler} from "./profileConnector";

type ProfileProps = {
    profile: ProfileType | undefined;
    status: string;
    isOwner: boolean | undefined;
    updateUserStatusThunkCreator: UpdateUserStatusHandler;
    savePhotoThunkCreator: SavePhotoHandler;
    saveDataThunkCreator: SaveDataHandler;
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const {
        status, isOwner, profile,
        saveDataThunkCreator, savePhotoThunkCreator, updateUserStatusThunkCreator
    } = props;
    return (
        <div className="profile-content">
            <ProfileInfo
                profile={profile}
                status={status}
                isOwner={isOwner}
                updateUserStatus={updateUserStatusThunkCreator}
                savePhoto={savePhotoThunkCreator}
                saveData={saveDataThunkCreator}
            />
            <div className="profile_posts">
                <MyPostsContainer/>
            </div>
        </div>
    );
}
