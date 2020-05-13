import {connect, ConnectedProps} from "react-redux";

import {AppReducerType} from "../../redux-store";
import {authThunkCreator, logoutThunkCreator} from "../../reducers/authReducer";

const mapStateToProps = (state: AppReducerType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps = {
    authThunkCreator, logoutThunkCreator
}

export const headerConnector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof headerConnector>;
export type AuthThunkCreatorType = PropsFromRedux["authThunkCreator"];
export type LogoutThunkCreatorType = PropsFromRedux["logoutThunkCreator"];
