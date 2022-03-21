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

    let dialogsData = [
        {id:1, name:"Igor"},
        {id:2, name:"Viktor"},
        {id:3, name:"Sasha"},
        {id:4, name:"Valera"}
    ]

    let messagesData = [
        {id:1, msg:'Hi friend'},
        {id:2, msg:'hi hi hi wasap'},
        {id:3, msg:'props is nice'}
    ]

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsList}>
                <DialogsFiends name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsFiends name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsFiends name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsFiends name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={stl.messages}>
                <MessageFiends msg={messagesData[0].msg}/>
                <MessageFiends msg={messagesData[1].msg}/>
                <MessageFiends msg={messagesData[2].msg}/>
            </div>
        </div>
    )
}

export default Dialogs;