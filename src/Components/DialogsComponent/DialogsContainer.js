import { connect } from "react-redux";
import { compose } from "redux";

import { Dialogs } from "./Dialogs";
import { authRedirect, authRedirectAwaiter } from "../../hoc/AuthRedirect";

import {
  addMessageActionCreator
} from "../../reducers/dialogsReducer";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      addMessage: addMessageActionCreator
    }
  ),
  authRedirectAwaiter,
  authRedirect
)(Dialogs);
