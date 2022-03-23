import React from 'react';
import stl from './Dialogs.module.css';
import DialogsFiends from "./DialogsFiends/DialogsFiends";
import MessageFiends from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogElement = props.stateData.dialogsData.map(
        d => <DialogsFiends name={d.name} id={d.id}/>)
    let messagesElement = props.stateData.messagesData.map(m => <MessageFiends msg={m.msg}/>)

    let newMessagesElement = React.createRef();

    let addMessages = () =>{
        let text = newMessagesElement.current.value;
        alert (text)
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
                    <textarea ref={newMessagesElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessages}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;