import {combineReducers, createStore, applyMiddleware, compose} from "redux";

import { dialogsReducer } from "./reducers/dialogsReducer";
import { profileReducer } from "./reducers/profileReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  router: connectRouter(history),
});

type ReducerType = typeof reducers;
export type AppReducerType = ReturnType<ReducerType>;

export let store = createStore(reducers,
    compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(routerMiddleware(history))
    ));
