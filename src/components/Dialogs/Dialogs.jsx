import React from 'react';
import stl from './Dialogs.module.css';
import DialogsFiends from "./DialogsFiends/DialogsFiends";
import MessageFiends from "./Messages/Messages";
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/messages-reduscer";


const Dialogs = (props) => {

    let dialogElement = props.stateData.dialogsData.map(
        d => <DialogsFiends name={d.name} id={d.id}/>)
    let messagesElement = props.stateData.messagesData.map(m => <MessageFiends msg={m.msg}/>)

    /*Добавление сообщений*/

    let addMessages = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (el) => {
        let text = el.target.value;
        props.dispatch(updateNewMessageText(text));
    }

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsList}>
                {dialogElement}
            </div>
            <div className={stl.messages}>
                <div className={stl.msgWindow}>
                    {messagesElement}
                </div>
                <div>
                    <textarea placeholder='Type you message' onChange={onMessageChange}
                              value={props.stateData.NewMessageText}/>
                </div>
                <div>
                    <button onClick={addMessages}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;