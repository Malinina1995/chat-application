import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: null
};

export let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: !!(action.data.userId && action.data.email && action.data.login)
      };
    default:
      return state;
  }
};

export const setUserDataActionCreator = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login
    }
  };
};

export const authThunkCreator = () => {
  return dispatch => {
    authAPI.getAuth().then(res => {
      if (res.resultCode === 0) {
        let { id, email, login } = res.data;
        dispatch(setUserDataActionCreator(id, email, login));
      } else {
        dispatch(setUserDataActionCreator(null, null, null));
      }
    });
  };
};
