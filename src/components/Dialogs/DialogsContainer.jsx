import React from 'react';
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/messages-reduscer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    /*Добавление сообщений*/

    let addMessages = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageText(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs addMessages={addMessages} updateNewMessage={onMessageChange}
                 messagesPage={state}
                 />
    )
}

export default DialogsContainer;