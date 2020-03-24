import { usersAPI } from "../api/api";

const FOLLOW = "user/FOLLOW";
const UNFOLLOW = "user/UNFOLLOW";
const SET_USERS = "user/SET-USERS";
const SET_CURRENT_PAGE = "user/SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "user/SET-TOTAL-USER-COUNT";
const TOGGE_IS_FETCHING = "user/TOGGE-IS-FETCHING";
const TOGGE_IS_FOLLOWING_PROGRESS = "user/TOGGE-IS-FOLLOWING-PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followInProgress: []
};

export let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    case TOGGE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followInProgress: action.isFetching
          ? [...state.followInProgress, action.userId]
          : state.followInProgress.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

export const followActionCreator = userId => {
  return {
    type: FOLLOW,
    userId
  };
};

export const unfollowActionCreator = userId => {
  return {
    type: UNFOLLOW,
    userId
  };
};

export const setUsersActionCreator = users => {
  return {
    type: SET_USERS,
    users
  };
};

export const setCurrentPageActionCreator = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
};

export const setTotalUserCountActionCreator = totalUsersCount => {
  return {
    type: SET_TOTAL_USER_COUNT,
    totalUsersCount
  };
};

export const toggleIsFetchingActionCreator = isFetching => {
  return {
    type: TOGGE_IS_FETCHING,
    isFetching
  };
};

export const followingInProgressActionCreator = (isFetching, userId) => {
  return {
    type: TOGGE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
  };
};

export const getUserThunkCreator = (pageSize, currentPage) => {
  return async dispatch => {
    dispatch(toggleIsFetchingActionCreator(true));

    let res = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(toggleIsFetchingActionCreator(false));
    dispatch(setUsersActionCreator(res.items));
    dispatch(setTotalUserCountActionCreator(res.totalCount));
    dispatch(setCurrentPageActionCreator(currentPage));
  };
};

const followUnfollowMethod = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(followingInProgressActionCreator(true, id));
    let res = await apiMethod(id);
    if (res.resultCode === 0) {
      dispatch(actionCreator(id));
    }
    dispatch(followingInProgressActionCreator(false, id));
}

export const followUserThunkCreator = id => {
  return async dispatch => {
    followUnfollowMethod(dispatch, id, usersAPI.followUsers.bind(usersAPI), followActionCreator);
  };
};

export const unfollowUserThunkCreator = id => {
  return async dispatch => {
    followUnfollowMethod(dispatch, id, usersAPI.unfollowUsers.bind(usersAPI), unfollowActionCreator);
  };
};
