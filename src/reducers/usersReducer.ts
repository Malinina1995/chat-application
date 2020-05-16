import {usersAPI} from "../api/api";
import {UserType} from "../types";
import {ThunkAction} from "redux-thunk";
import {AppReducerType} from "../redux-store";
import {Dispatch} from "redux";

const FOLLOW = "user/FOLLOW";
const UNFOLLOW = "user/UNFOLLOW";
const SET_USERS = "user/SET-USERS";
const SET_CURRENT_PAGE = "user/SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "user/SET-TOTAL-USER-COUNT";
const TOGGLE_IS_FETCHING = "user/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "user/TOGGLE-IS-FOLLOWING-PROGRESS";


type UsersInitialStateType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followInProgress: number[]; // arrays of usersId
}

let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: []
};

type UsersStateActions = FollowActionCreatorType
    | UnfollowActionCreatorType
    | SetUsersActionCreatorType
    | SetCurrentPageActionCreatorType
    | SetTotalUserCountActionCreatorType
    | ToggleIsFetchingActionCreatorType
    | FollowingInProgressActionCreatorType;

type UsersThunkType = ThunkAction<Promise<void>, AppReducerType, unknown, UsersStateActions>;
type DispatchType = Dispatch<UsersStateActions>;

export let usersReducer = (state = initialState, action: UsersStateActions): UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
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

type FollowActionCreatorType = {
    type: typeof FOLLOW;
    userId: number
}

const followActionCreator = (userId: number): FollowActionCreatorType => {
    return {
        type: FOLLOW,
        userId
    };
};

type UnfollowActionCreatorType = {
    type: typeof UNFOLLOW;
    userId: number
}

const unfollowActionCreator = (userId: number): UnfollowActionCreatorType => {
    return {
        type: UNFOLLOW,
        userId
    };
};

type SetUsersActionCreatorType = {
    type: typeof SET_USERS;
    users: UserType[]
}

const setUsersActionCreator = (users: UserType[]): SetUsersActionCreatorType => {
    return {
        type: SET_USERS,
        users
    };
};

type SetCurrentPageActionCreatorType = {
    type: typeof SET_CURRENT_PAGE;
    currentPage: number
}

const setCurrentPageActionCreator = (currentPage: number): SetCurrentPageActionCreatorType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
};

type SetTotalUserCountActionCreatorType = {
    type: typeof SET_TOTAL_USER_COUNT;
    totalUsersCount: number
}

const setTotalUserCountActionCreator = (totalUsersCount: number): SetTotalUserCountActionCreatorType => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsersCount
    };
};

type ToggleIsFetchingActionCreatorType = {
    type: typeof TOGGLE_IS_FETCHING;
    isFetching: boolean
}

const toggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionCreatorType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
};

type FollowingInProgressActionCreatorType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
    isFetching: boolean;
    userId: number
}

const followingInProgressActionCreator = (isFetching: boolean, userId: number): FollowingInProgressActionCreatorType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    };
};

export const getUserThunkCreator = (pageSize: number, currentPage: number): UsersThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));

        let res = await usersAPI.getUsers(pageSize, currentPage);
        dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setUsersActionCreator(res.items));
        dispatch(setTotalUserCountActionCreator(res.totalCount));
        dispatch(setCurrentPageActionCreator(currentPage));
    };
};

const _followUnfollowMethod = async (dispatch: DispatchType, id: number, apiMethod: any,
                                     actionCreator: (id: number) => UsersStateActions) => {
    dispatch(followingInProgressActionCreator(true, id));
    let res = await apiMethod(id);
    if (res.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(followingInProgressActionCreator(false, id));
}

export const followUserThunkCreator = (id: number): UsersThunkType => {
    return async (dispatch) => {
        await _followUnfollowMethod(dispatch, id, usersAPI.followUsers.bind(usersAPI), followActionCreator);
    };
};

export const unfollowUserThunkCreator = (id: number): UsersThunkType => {
    return async (dispatch) => {
        await _followUnfollowMethod(dispatch, id, usersAPI.unfollowUsers.bind(usersAPI), unfollowActionCreator);
    };
};
