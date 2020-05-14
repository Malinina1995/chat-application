import {connect, ConnectedProps} from "react-redux";
import {AppReducerType} from "../../redux-store";
import {
    getUserThunkCreator, getUserStatusThunkCreator, saveDataThunkCreator,
    savePhotoThunkCreator,
    updateUserStatusThunkCreator
} from "../../reducers/profileReducer";

const mapStateToProps = (state: AppReducerType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        logUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = {
    getUserThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
    savePhotoThunkCreator,
    saveDataThunkCreator
}

export const profileConnector = connect(mapStateToProps, mapDispatchToProps);
export type ProfilePropsFromRedux = ConnectedProps<typeof profileConnector>;
export type GetUserHandler = ProfilePropsFromRedux["getUserThunkCreator"];
export type GetUserStatusHandler = ProfilePropsFromRedux["getUserStatusThunkCreator"];
export type UpdateUserStatusHandler = ProfilePropsFromRedux["updateUserStatusThunkCreator"];
export type SavePhotoHandler = ProfilePropsFromRedux["savePhotoThunkCreator"];
export type SaveDataHandler = ProfilePropsFromRedux["saveDataThunkCreator"];
