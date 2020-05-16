import React from "react";
import "./Profile.css";
import {MyPostsContainer} from "./MyPostsComponent/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfoComponent/ProfileInfo";
import {ProfileType} from "../../types";
import {SaveDataHandler, SavePhotoHandler, UpdateUserStatusHandler} from "./profileConnector";

export type ProfileProps = {
    profile: ProfileType | undefined;
    status: string;
    isOwner: boolean;
    updateUserStatusThunkCreator: UpdateUserStatusHandler;
    savePhotoThunkCreator: SavePhotoHandler;
    saveDataThunkCreator: SaveDataHandler;
}

export const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <div className="profile-content">
            <ProfileInfo {...props}/>
            <div className="profile_posts">
                <MyPostsContainer/>
            </div>
        </div>
    );
}
