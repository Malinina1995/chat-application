import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";
const GET_CAPTCHA_URL = "auth/GET-CAPTCHA-URL";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: null,
  captchaURL: null
};

export let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: !!(action.data.userId && action.data.email && action.data.login)
      };
    case GET_CAPTCHA_URL:
      return {
        ...state,
        captchaURL: action.captchaUrl
      };
    default:
      return state;
  }
};

export const setUserDataActionCreator = (userId, email, login, isAuth, captcha) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login,
      captcha
    }
  };
};

export const getCaptchaUrlActionCreator = captchaUrl => {
  return {
    type: GET_CAPTCHA_URL,
    captchaUrl
  };
};

export const authThunkCreator = () => {
  return async dispatch => {
    let res = await authAPI.getAuth();
    if (res.resultCode === 0) {
      let { id, email, login } = res.data;
      dispatch(setUserDataActionCreator(id, email, login, true));
    } else {
      dispatch(setUserDataActionCreator(null, null, null, null));
    }
  };
};

export const loginThunkCreator = (email, password, rememberMe, captcha) => {
  return async dispatch => {
    let res = await authAPI.login(email, password, rememberMe, captcha);
    if (res.resultCode === 0) {
      dispatch(authThunkCreator());
    } else {
      if(res.resultCode === 10){
        dispatch(getCaptchaURLThunkCreator());
      }
      dispatch(stopSubmit("login", { _error: res.messages }));
    }
  };
};

export const logoutThunkCreator = (email, password, rememberMe) => {
  return async dispatch => {
    let res = await authAPI.logout();
    if (res.resultCode === 0) {
      dispatch(setUserDataActionCreator(null, null, null, false));
    }
  };
};

export const getCaptchaURLThunkCreator = (email, password, rememberMe) => {
  return async dispatch => {
    let res = await securityAPI.getCaptchaURL();
    dispatch(getCaptchaUrlActionCreator(res.url));
  };
};
