import {AppReducerType} from "../redux-store";

export const getUsers = (state: AppReducerType)=> state.friendsPage.users;
export const getPageSize = (state:AppReducerType) => state.friendsPage.pageSize;
export const getTotalUsersCount = (state:AppReducerType) => state.friendsPage.totalUsersCount;
export const getCurrentPage = (state:AppReducerType) => state.friendsPage.currentPage;
export const getIsFetching = (state:AppReducerType) => state.friendsPage.isFetching;
export const getFollowInProgress = (state:AppReducerType) => state.friendsPage.followInProgress;
