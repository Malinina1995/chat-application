import { dialogsReducer } from "./src/reducers/dialogsReducer";
import { profileReducer } from "./src/reducers/profileReducer";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hey! How are you?" },
        { id: 2, message: "Good!" },
        { id: 3, message: "briliant!" }
      ],
      newPostText: ""
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Vasya" },
        { id: 2, name: "Tanya" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Masha" },
        { id: 5, name: "Ann" },
        { id: 6, name: "Alex" }
      ],
      messages: [
        { id: 1, message: "Hey!" },
        { id: 2, message: "No-no-no!" },
        { id: 3, message: "Oh!" },
        { id: 4, message: "Go away!" }
      ],
      newMessageText: ""
    }
  },

  getState() {
    return this._state;
  },

  _callSubscribe() {},

  subscribe(observer) {
    this._callSubscribe = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscribe(this._state);
  }
};
