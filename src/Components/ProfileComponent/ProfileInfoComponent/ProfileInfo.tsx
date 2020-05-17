import React, {ChangeEvent, useState} from "react";
import {Preloader} from "../../PreloaderComponent/Preloader";

import "./ProfileInfo.css";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import {ProfileData} from "./ProfileDataComponent/ProfileData";
import {ProfileDataFormReduxForm} from "./ProfileDataForm/ProfileDataForm";
import {ProfileProps} from "../Profile";
import {ProfileType} from "../../../types";

export const ProfileInfo: React.FC<ProfileProps> = (props) => {
    const {
        isOwner, profile, status,
        updateUserStatusThunkCreator, saveDataThunkCreator, savePhotoThunkCreator
    } = props;

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelector = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length) {
            const files = e.target?.files ?? [];
            if (files.length) {
                savePhotoThunkCreator(files[0]);
            }
        }
    };

    const onSubmit = (formData: ProfileType) => {
        saveDataThunkCreator(formData).then(() => {
            setEditMode(false);
        })
    };

    const imagePath = profile.photos?.large
        ? profile.photos.large
        : "https://avatars.mds.yandex.net/get-pdb/1732371/78b3b128-3813-4d35-8b87-b3c911581ca0/s1200?webp=false";
    return (
        <>
            <div className="profile_info">
                <div>
                    <img src={imagePath} alt='' className="profile_info-avatar"/>
                </div>
                <div className="profile_information">
                    <span className="profile_info-name">{profile.fullName}</span>
                    <ProfileStatusWithHooks
                        status={status}
                        isOwner={isOwner}
                        updateStatus={updateUserStatusThunkCreator}
                    />
                    {editMode ? (
                        <ProfileDataFormReduxForm
                            initialValues={profile}
                            onSubmit={onSubmit}
                        />
                    ) : (
                        <ProfileData
                            goToEditMode={() => {
                                setEditMode(true);
                            }}
                            profile={profile}
                            isOwner={isOwner}
                        />
                    )}
                </div>
            </div>
            {isOwner && (
                <div className="profile_info-addPhoto">
                    Update avatar <input type="file" onChange={onMainPhotoSelector}/>
                </div>
            )}
        </>
    );
}
