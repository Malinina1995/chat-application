import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const GET_USER_STATUS = "profile/GET-USER-STATUS";
const SET_USER_PHOTO = "profile/SET-USER-PHOTO";


type InitialStateType = {
    posts: PostType[];
    profile?: ProfileType;
    status: string
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hey! How are you?"},
        {id: 2, message: "Good!"},
        {id: 3, message: "briliant!"}
    ],
    profile: undefined,
    status: ""
};

type StateActions = AddPostActionCreatorType
    | SetUserProfileActionCreatorType
    | GetUserStatusActionCreatorType
    | SavePhotoActionCreatorType;

export let profileReducer = (state = initialState, action: StateActions): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let text = action.text;
            if (text.trim()) {
                return {
                    ...state,
                    posts: [
                        ...state.posts,
                        {
                            id: state.posts.length + 1,
                            message: text.trim()
                        }
                    ]
                };
            }
            return state;
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case GET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile!,
                    photos: action.file
                }
            }
        default:
            return state;
    }
};

type AddPostActionCreatorType = {
    type: typeof ADD_POST;
    text: string
}

export const addPostActionCreator = (text: string): AddPostActionCreatorType => {
    return {
        type: ADD_POST,
        text
    };
};

type SetUserProfileActionCreatorType = {
    type: typeof SET_USER_PROFILE;
    profile: ProfileType
}

export const setUserProfileActionCreator = (profile: ProfileType): SetUserProfileActionCreatorType => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

type GetUserStatusActionCreatorType = {
    type: typeof GET_USER_STATUS;
    status: string
}

export const getUserStatusActionCreator = (status: string): GetUserStatusActionCreatorType => {
    return {
        type: GET_USER_STATUS,
        status
    };
};

type SavePhotoActionCreatorType = {
    type: typeof SET_USER_PHOTO;
    file: PhotosType
}

export const savePhotoActionCreator = (file: PhotosType): SavePhotoActionCreatorType => {
    return {
        type: SET_USER_PHOTO,
        file
    };
};

export const getUserThunkCreator = (id: number) => {
    return async (dispatch: any) => {
        let res = await profileAPI.getProfile(id);
        dispatch(setUserProfileActionCreator(res));
    };
};

export const getUserStatusThunkCreator = (id: number) => {
    return async (dispatch: any) => {
        let res = await profileAPI.getStatus(id);
        dispatch(getUserStatusActionCreator(res));
    };
};

export const updateUserStatusThunkCreator = (status: string) => {
    return async (dispatch: any) => {
        let res = await profileAPI.updateStatus(status);
        if (res.resultCode === 0) dispatch(getUserStatusActionCreator(status));
    };
};

export const savePhotoThunkCreator = (file: PhotosType) => {
    return async (dispatch: any) => {
        let res = await profileAPI.savePhoto(file);
        if (res.resultCode === 0) dispatch(savePhotoActionCreator(res.data.photos));
    };
}

export const saveDataThunkCreator = (data: ProfileType) => {
    return async (dispatch: any, getState: any) => {
        let res = await profileAPI.saveProfile(data);
        if (res.resultCode === 0) {
            dispatch(getUserThunkCreator(getState().auth.userId));
        } else {
            dispatch(stopSubmit("edit-profile", {_error: res.messages[0]}));
            return Promise.reject(res.messages[0]);
        }
    };
}
