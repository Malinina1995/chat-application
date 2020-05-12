import {usersAPI} from "../api/api";
import {UserType} from "../types";


const FOLLOW = "user/FOLLOW";
const UNFOLLOW = "user/UNFOLLOW";
const SET_USERS = "user/SET-USERS";
const SET_CURRENT_PAGE = "user/SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "user/SET-TOTAL-USER-COUNT";
const TOGGE_IS_FETCHING = "user/TOGGE-IS-FETCHING";
const TOGGE_IS_FOLLOWING_PROGRESS = "user/TOGGE-IS-FOLLOWING-PROGRESS";


type InitialStateType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followInProgress: number[]; // arrays of usersId
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: []
};

type StateActions = FollowActionCreatorType
    | UnfollowActionCreatorType
    | SetUsersActionCreatorType
    | SetCurrentPageActionCreatorType
    | SetTotalUserCountActionCreatorType
    | ToggleIsFetchingActionCreatorType
    | FollowingInProgressActionCreatorType;

export let usersReducer = (state = initialState, action: StateActions): InitialStateType => {
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

type FollowActionCreatorType = {
    type: typeof FOLLOW;
    userId: number
}

export const followActionCreator = (userId: number): FollowActionCreatorType => {
    return {
        type: FOLLOW,
        userId
    };
};

type UnfollowActionCreatorType = {
    type: typeof UNFOLLOW;
    userId: number
}

export const unfollowActionCreator = (userId: number): UnfollowActionCreatorType => {
    return {
        type: UNFOLLOW,
        userId
    };
};

type SetUsersActionCreatorType = {
    type: typeof SET_USERS;
    users: UserType[]
}

export const setUsersActionCreator = (users: UserType[]): SetUsersActionCreatorType => {
    return {
        type: SET_USERS,
        users
    };
};

type SetCurrentPageActionCreatorType = {
    type: typeof SET_CURRENT_PAGE;
    currentPage: number
}

export const setCurrentPageActionCreator = (currentPage: number): SetCurrentPageActionCreatorType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
};

type SetTotalUserCountActionCreatorType = {
    type: typeof SET_TOTAL_USER_COUNT;
    totalUsersCount: number
}

export const setTotalUserCountActionCreator = (totalUsersCount: number): SetTotalUserCountActionCreatorType => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsersCount
    };
};

type ToggleIsFetchingActionCreatorType = {
    type: typeof TOGGE_IS_FETCHING;
    isFetching: boolean
}

export const toggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionCreatorType => {
    return {
        type: TOGGE_IS_FETCHING,
        isFetching
    };
};

type FollowingInProgressActionCreatorType = {
    type: typeof TOGGE_IS_FOLLOWING_PROGRESS;
    isFetching: boolean;
    userId: number
}

export const followingInProgressActionCreator = (isFetching: boolean, userId: number): FollowingInProgressActionCreatorType => {
    return {
        type: TOGGE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    };
};

export const getUserThunkCreator = (pageSize: number, currentPage: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingActionCreator(true));

        let res = await usersAPI.getUsers(pageSize, currentPage);
        dispatch(toggleIsFetchingActionCreator(false));
        dispatch(setUsersActionCreator(res.items));
        dispatch(setTotalUserCountActionCreator(res.totalCount));
        dispatch(setCurrentPageActionCreator(currentPage));
    };
};

const followUnfollowMethod = async (dispatch: any, id: number, apiMethod: any, actionCreator: any) => {
    dispatch(followingInProgressActionCreator(true, id));
    let res = await apiMethod(id);
    if (res.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(followingInProgressActionCreator(false, id));
}

export const followUserThunkCreator = (id: number) => {
    return async (dispatch: any) => {
        followUnfollowMethod(dispatch, id, usersAPI.followUsers.bind(usersAPI), followActionCreator);
    };
};

export const unfollowUserThunkCreator = (id: number) => {
    return async (dispatch: any) => {
        followUnfollowMethod(dispatch, id, usersAPI.unfollowUsers.bind(usersAPI), unfollowActionCreator);
    };
};
