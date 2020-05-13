import {DialogType, MessageType} from "../types";

const ADD_MESSAGE = "dialogs/ADD-MESSAGE";

type InitialStateType = {
    dialogs: DialogType[];
    messages: MessageType[]
}

let initialState: InitialStateType = {
    dialogs: [
        {id: 1, name: "Vasya"},
        {id: 2, name: "Tanya"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Masha"},
        {id: 5, name: "Ann"},
        {id: 6, name: "Alex"}
    ],
    messages: [
        {id: 1, message: "Hey!"},
        {id: 2, message: "No-no-no!"},
        {id: 3, message: "Oh!"},
        {id: 4, message: "Go away!"}
    ]
};

type StateAction = AddMessageActionCreatorType;

export let dialogsReducer = (state = initialState, action: StateAction): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.newText;
            if (text.trim()) {
                return {
                    ...state,
                    messages: [
                        ...state.messages,
                        {
                            id: state.messages.length + 1,
                            message: text.trim()
                        }
                    ]
                };
            }
            return state;
        default:
            return state;
    }
};

type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE;
    newText: string
}

export const addMessageActionCreator = (text:string): AddMessageActionCreatorType => {
    return {
        type: ADD_MESSAGE,
        newText: text
    };
};
