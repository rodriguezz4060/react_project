import React from 'react';
import stl from './../Dialogs.module.css';


const MessageFiends = (props) => {
    return (
        <div>
            <div className={stl.bubble}>{props.msg}</div>
            <div className={stl.bubbleRight}>{props.msg}</div>
        </div>
    )
}


export default MessageFiends;