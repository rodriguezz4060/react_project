import React from 'react';
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/messages-reduscer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    /*Добавление сообщений*/

    let addMessages = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageText(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs addMessages={addMessages} MessageText={onMessageChange}
                 messagesData={state.messagesPage.messagesData}
                 NewMessageText={state.messagesPage.NewMessageText}
                 dialogsData={state.messagesPage.dialogsData}
                 />
    )
}

export default DialogsContainer;