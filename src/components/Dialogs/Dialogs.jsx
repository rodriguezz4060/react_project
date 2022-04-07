import React from 'react';
import stl from './Dialogs.module.css';
import DialogsFiends from "./DialogsFiends/DialogsFiends";
import MessageFiends from "./Messages/Messages";

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogElement = state.dialogsData.map(
        d => <DialogsFiends name={d.name} key={d.id} id={d.id}/>)
    let messagesElement = state.messagesData.map(m => <MessageFiends key={m.id} msg={m.msg}/>)

    /*Добавление сообщений*/

    let onAddMessages = () => {
        props.addMessages();
    }

    let onMessageChange = (el) => {
        let text = el.target.value;
        props.updateNewMessage(text);
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
                              value={state.NewMessageText}/>
                </div>
                <div>
                    <button onClick={onAddMessages}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;