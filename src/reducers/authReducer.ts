import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";
const GET_CAPTCHA_URL = "auth/GET-CAPTCHA-URL";

type InitialStateType = {
    userId?: number,
    email?: string,
    login?: string,
    isAuth?: boolean,
    captchaURL?: string
}

let initialState: InitialStateType = {
    userId: undefined,
    email: undefined,
    login: undefined,
    isAuth: undefined,
    captchaURL: undefined
};

type StateAction = SetUserDataActionCreatorType | GetCaptchaUrlActionCreatorType;

export let authReducer = (state = initialState, action: StateAction): InitialStateType => {
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

type GetCaptchaUrlActionCreatorType = {
    type: typeof GET_CAPTCHA_URL;
    captchaUrl: string
}

export const getCaptchaUrlActionCreator = (captchaUrl: string): GetCaptchaUrlActionCreatorType => {
    return {
        type: GET_CAPTCHA_URL,
        captchaUrl
    };
};

export const authThunkCreator = () => {
    return async (dispatch: any) => {
        let res = await authAPI.getAuth();
        if (res.resultCode === 0) {
            let {id, email, login} = res.data;
            dispatch(setUserDataActionCreator(id, email, login, true));
        } else {
            dispatch(setUserDataActionCreator());
        }
    };
};

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        let res = await authAPI.login(email, password, rememberMe, captcha);
        if (res.resultCode === 0) {
            dispatch(authThunkCreator());
        } else {
            if (res.resultCode === 10) {
                dispatch(getCaptchaURLThunkCreator());
            }
            dispatch(stopSubmit("login", {_error: res.messages}));
        }
    };
};

export const logoutThunkCreator = () => {
    return async (dispatch: any) => {
        let res = await authAPI.logout();
        if (res.resultCode === 0) {
            dispatch(setUserDataActionCreator(undefined, undefined, undefined, false));
        }
    };
};

export const getCaptchaURLThunkCreator = () => {
    return async (dispatch: any) => {
        let res = await securityAPI.getCaptchaURL();
        dispatch(getCaptchaUrlActionCreator(res.url));
    };
};
