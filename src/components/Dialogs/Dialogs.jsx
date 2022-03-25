import React from 'react';
import stl from './Dialogs.module.css';
import DialogsFiends from "./DialogsFiends/DialogsFiends";
import MessageFiends from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogElement = props.stateData.dialogsData.map(
        d => <DialogsFiends name={d.name} id={d.id}/>)
    let messagesElement = props.stateData.messagesData.map(m => <MessageFiends msg={m.msg}/>)

    /*Добавление сообщений*/

    let newMessagesElement = React.createRef();

    let addMessages = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessagesElement.current.value;
        props.updateNewMessageText(text);
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
                    <textarea onChange={onMessageChange} ref={newMessagesElement}
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