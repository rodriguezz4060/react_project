import React from 'react';
import stl from './Dialogs.module.css';
import DialogsFiends from "./DialogsFiends/DialogsFiends";
import MessageFiends from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogElement = props.dialogsData.map(
        d => <DialogsFiends name={d.name} id={d.id}/>)
    let messagesElement = props.messagesData.map(m => <MessageFiends msg={m.msg}/>)

    /*Добавление сообщений*/

    let onAddMessages = () => {
        props.addMessages();
    }

    let onMessageChange = (el) => {
        let text = el.target.value;
        props.MessageText(text);
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
                              value={props.NewMessageText}/>
                </div>
                <div>
                    <button onClick={onAddMessages}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;