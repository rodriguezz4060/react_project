import React from 'react';
import stl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsFiends = (props) => {
    let path = "/dialogs/" + props.id
    return <div className={stl.dialog + ' ' + stl.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const MessageFiends = (props) => {
    return <div className={stl.message}>{props.msg}</div>
}

const Dialogs = (props) => {
    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsList}>
                <DialogsFiends name="Igor" id="1"/>
                <DialogsFiends name="Viktor" id="2"/>
                <DialogsFiends name="Sasha" id="3"/>
                <DialogsFiends name="Valera" id="4"/>
            </div>
            <div className={stl.messages}>
                <MessageFiends msg="Hi friend"/>
                <MessageFiends msg="hi hi hi wasap"/>
                <MessageFiends msg="props is nice"/>
            </div>
        </div>
    )
}

export default Dialogs;