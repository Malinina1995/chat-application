import {connect, ConnectedProps} from "react-redux";

import {AppReducerType} from "../../redux-store";
import {addMessageActionCreator} from "../../reducers/dialogsReducer";

const mapStateToProps = (state: AppReducerType) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

const mapDispatchToProps = {
    addMessage: addMessageActionCreator
}

export const dialogsConnector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof dialogsConnector>;
export type AddMessageHandler = PropsFromRedux["addMessage"];
