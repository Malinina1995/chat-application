import { compose } from "redux";
import {dialogsConnector} from "./dialogsConnector";
import { Dialogs } from "./Dialogs";
import { authRedirect, authRedirectAwaiter } from "../../hoc/AuthRedirect";
import {ComponentType} from "react";

export default compose<ComponentType>(
  dialogsConnector,
  authRedirectAwaiter,
  authRedirect
)(Dialogs);
