import React from 'react';
import stl from './Dialogs.module.css';
import DialogsFiends from "./DialogsFiends/DialogsFiends";
import MessageFiends from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogElement = props.stateData.dialogsData.map(
        d => <DialogsFiends name={d.name} id={d.id}/>)
    let messagesElement = props.stateData.messagesData.map(m => <MessageFiends msg={m.msg}/>)

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
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;