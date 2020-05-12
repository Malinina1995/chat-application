import { combineReducers, createStore, applyMiddleware } from "redux";

import { dialogsReducer } from "./reducers/dialogsReducer";
import { profileReducer } from "./reducers/profileReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

type ReducerType = typeof reducers;
export type AppReducerType = ReturnType<ReducerType>;

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
