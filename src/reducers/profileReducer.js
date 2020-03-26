import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const GET_USER_STATUS = "profile/GET-USER-STATUS";
const SET_USER_PHOTO = "profile/SET-USER-PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "Hey! How are you?" },
    { id: 2, message: "Good!" },
    { id: 3, message: "briliant!" }
  ],
  profile: null,
  status: ""
};

export let profileReducer = (state = initialState, action) => {
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
        profile: {...state.profile, photos: action.file}
      }
    default:
      return state;
  }
};

export const addPostActionCreator = text => {
  return {
    type: ADD_POST,
    text
  };
};

export const setUserProfileActionCreator = profile => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};

export const getUserStatusActionCreator = status => {
  return {
    type: GET_USER_STATUS,
    status
  };
};

export const savePhotoActionCreator = file => {
  return {
    type: SET_USER_PHOTO,
    file
  };
};

export const getUserThunkCreator = id => {
  return async dispatch => {
    let res = await profileAPI.getProfile(id);
    dispatch(setUserProfileActionCreator(res));
  };
};

export const getUserStatusThunkCreator = id => {
  return async dispatch => {
    let res = await profileAPI.getStatus(id);
    dispatch(getUserStatusActionCreator(res));
  };
};

export const updateUserStatusThunkCreator = status => {
  return async dispatch => {
    let res = await profileAPI.updateStatus(status);
    if (res.resultCode === 0) dispatch(getUserStatusActionCreator(status));
  };
};

export const savePhotoThunkCreator = file => {
  return async dispatch => {
    let res = await profileAPI.savePhoto(file);
    if (res.resultCode === 0) dispatch(savePhotoActionCreator(res.data.photos));
  };
}

export const saveDataThunkCreator = data => {
  return async (dispatch,getState) => {
    let res = await profileAPI.saveProfile(data);
    if (res.resultCode === 0) {
      dispatch(getUserThunkCreator(getState().auth.userId));
    } else {
      dispatch(stopSubmit("edit-profile", { _error: res.messages[0] }));
      return Promise.reject(res.messages[0]);
    };
  };
}
