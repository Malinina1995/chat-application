import {connect, ConnectedProps} from "react-redux";
import {followUserThunkCreator, getUserThunkCreator, unfollowUserThunkCreator} from "../../reducers/usersReducer";
import {
    getCurrentPage,
    getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../reducers/users-selector";
import {AppReducerType} from "../../redux-store";

const mapStateToProps = (state: AppReducerType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    };
};

const mapDispatchToProps = {
    getUserThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator
}

export const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export type FollowHandler = PropsFromRedux["followUserThunkCreator"];
export type UnfollowHandler = PropsFromRedux["unfollowUserThunkCreator"];
