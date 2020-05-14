import React from "react";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";

import "./Dialogs.css";

import {DialogItem} from "./DialogItemComponent/DialogItem";
import {Message} from "./MessageComponent/Message";
import {Textarea} from "../../FormControls/FormControls";
import {maxLength, required} from "../../utils/validators/validators";
import {AddMessageHandler} from "./dialogsConnector";
import {Dispatch} from "redux";
import {DecoratedFormProps} from "redux-form/lib/reduxForm";
import {DialogType, MessageType} from "../../types";

type SubmitHandler = (result: any, dispatch: Dispatch<any>,
                      props: DecoratedFormProps<FormDataType, DialogsFormProps>) => void

const afterSubmit: SubmitHandler = (result: any, dispatch: Dispatch<any>) =>
    dispatch(reset('addMessage'));

type DialogsProps = {
    dialogsPage: {
        dialogs: DialogType[],
        messages: MessageType[]
    };
    isAuth: boolean;
    addMessage: AddMessageHandler
}

type FormDataType = {
    newMessageText: string
}

export const Dialogs: React.FC<DialogsProps> = (props) => {
    const {
        dialogsPage: {dialogs, messages},
        isAuth, addMessage
    } = props;

    if (!isAuth) {
        return <Redirect to={"/login"}/>;
    }

    let addNewMessage = (formData: FormDataType) => {
        addMessage(formData.newMessageText);
    };

    return (
        <div className="message-content">
            <div className="message_dialogs">
                {dialogs.map(dialog => {
                    return (
                        <DialogItem name={dialog.name} key={dialog.id} path={dialog.id}/>
                    );
                })}
            </div>
            <div className="message_messages">
                <div className="message_messages-items">
                    {messages.map(message => {
                        return <Message key={message.id} message={message.message}/>;
                    })}
                </div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

let maxLength100 = maxLength(100);

type DialogsFormProps = {};
type DialogsFormType = React.FC<DialogsFormProps & InjectedFormProps<FormDataType, DialogsFormProps>>;
const DialogsForm: DialogsFormType = ({handleSubmit}) => {
    return (
        <form
            className="message_messages-textarea-send"
            onSubmit={handleSubmit}
        >
            <Field
                component={Textarea}
                name="newMessageText"
                type="text"
                placeholder="Write a message..."
                aria-label="Search"
                validate={[required, maxLength100]}
            />
            <div>
                <button className="btn btn-primary">Send</button>
            </div>
        </form>
    );
};

const AddMessageReduxForm = reduxForm<FormDataType, DialogsFormProps>({
    form: "addMessage",
    onSubmitSuccess: afterSubmit
})(DialogsForm);
