import { combineReducers, createStore, applyMiddleware } from "redux";

import { dialogsReducer } from "./src/reducers/dialogsReducer";
import { profileReducer } from "./src/reducers/profileReducer";
import { findUsersReducer } from "./src/reducers/findUsersReducer";
import { authReducer } from "./src/reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: findUsersReducer,
  auth: authReducer,
  form: formReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
