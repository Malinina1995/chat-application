import {ResultCodeForCaptcha, ResultCodes} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppReducerType} from "../redux-store";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";

const SET_USER_DATA = "auth/SET-USER-DATA";
const GET_CAPTCHA_URL = "auth/GET-CAPTCHA-URL";


type AuthInitialStateType = {
    userId?: number,
    email?: string,
    login?: string,
    isAuth?: boolean,
    captchaURL?: string
}
type AuthStateActions = SetUserDataActionCreatorType | GetCaptchaUrlActionCreatorType;
type AuthThunkType = ThunkAction<Promise<void>, AppReducerType, unknown, AuthStateActions | FormAction>;
type SetUserDataActionCreatorDataType = {
    userId?: number;
    email?: string;
    login?: string;
    captcha?: string;
}
type SetUserDataActionCreatorType = {
    type: typeof SET_USER_DATA;
    data: SetUserDataActionCreatorDataType
}
type GetCaptchaUrlActionCreatorType = {
    type: typeof GET_CAPTCHA_URL;
    captchaUrl: string
}


let initialState: AuthInitialStateType = {
    userId: undefined,
    email: undefined,
    login: undefined,
    isAuth: undefined,
    captchaURL: undefined
};


export let authReducer = (state = initialState, action: AuthStateActions): AuthInitialStateType => {
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


export const setUserDataActionCreator =
    (userId?: number,
     email?: string,
     login?: string,
     isAuth?: boolean,
     captcha?: string): SetUserDataActionCreatorType => {
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

export const getCaptchaUrlActionCreator = (captchaUrl: string): GetCaptchaUrlActionCreatorType => {
    return {
        type: GET_CAPTCHA_URL,
        captchaUrl
    };
};


export const authThunkCreator = (): AuthThunkType => {
    return async (dispatch) => {
        let res = await authAPI.getAuth();
        if (res.resultCode === ResultCodes.Success) {
            let {id, email, login} = res.data;
            dispatch(setUserDataActionCreator(id, email, login, true));
        } else {
            dispatch(setUserDataActionCreator());
        }
    };
};

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string): AuthThunkType => {
    return async (dispatch) => {
        let res = await authAPI.login(email, password, rememberMe, captcha);
        if (res.resultCode === ResultCodes.Success) {
            await dispatch(authThunkCreator());
        } else {
            if (res.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                await dispatch(getCaptchaURLThunkCreator());
            }
            dispatch(stopSubmit("login", {_error: res.messages}));
        }
    };
};

export const logoutThunkCreator = (): AuthThunkType => {
    return async (dispatch) => {
        let res = await authAPI.logout();
        if (res.resultCode === ResultCodes.Success) {
            dispatch(setUserDataActionCreator(undefined, undefined, undefined, false));
        }
    };
};

export const getCaptchaURLThunkCreator = (): AuthThunkType => {
    return async (dispatch) => {
        let res = await securityAPI.getCaptchaURL();
        dispatch(getCaptchaUrlActionCreator(res.url));
    };
};
