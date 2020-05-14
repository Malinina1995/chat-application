import React, {Component} from 'react';
import {Header} from './Header';
import {AuthThunkCreatorType, headerConnector, LogoutThunkCreatorType} from "./headerConnector";

type HeaderContainerProps = {
    authThunkCreator: AuthThunkCreatorType;
    isAuth: boolean | undefined;
    login: string | undefined;
    logoutThunkCreator: LogoutThunkCreatorType
}

class HeaderContainer extends Component<HeaderContainerProps> {
    componentDidMount() {
        this.props.authThunkCreator();
    }

    render() {
        return <Header {...this.props} />;
    }
}


export default headerConnector(HeaderContainer);
