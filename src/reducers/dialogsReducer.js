const ADD_MESSAGE = "ADD-MESSAGE";

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
  ]
};

export let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (action.newText) {
        return {
          ...state,
          messages: [
            ...state.messages,
            {
              id: state.messages.length + 1,
              message: action.newText.trim() 
            }
          ]
        };
      }
    default:
      return state;
  }
};

export const addMessageActionCreator = text => {
  return {
    type: ADD_MESSAGE,
    newText: text
  };
};
