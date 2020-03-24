import { combineReducers, createStore, applyMiddleware } from "redux";

import { dialogsReducer } from "./src/reducers/dialogsReducer";
import { profileReducer } from "./src/reducers/profileReducer";
import { usersReducer } from "./src/reducers/usersReducer";
import { authReducer } from "./src/reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
