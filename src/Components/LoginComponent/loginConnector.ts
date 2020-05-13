import {connect, ConnectedProps} from "react-redux";

import {AppReducerType} from "../../redux-store";
import {loginThunkCreator} from "../../reducers/authReducer";

const mapStateToProps = (state: AppReducerType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaURL
})

const mapDispatchToProps = {
    loginThunkCreator
}

export const loginConnector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof loginConnector>;
export type LoginThunkCreatorHandler = PropsFromRedux["loginThunkCreator"];
