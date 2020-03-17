const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

let initialState = {
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
};

export let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = { ...state }.newMessageText.trim();
      if (newMessage) {
        return {
          ...state,
          newMessageText: '',
          messages: [
            ...state.messages,
            {
              id: state.messages.length + 1,
              message: newMessage 
            }
          ]
        };
      }
    case CHANGE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  };
};

export const changeMessageActionCreator = text => {
  return {
    type: CHANGE_MESSAGE_TEXT,
    newText: text
  };
};
