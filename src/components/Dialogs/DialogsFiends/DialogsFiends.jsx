import React from 'react';
import stl from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsFiends = (props) => {
    let path = "/dialogs/" + props.id
    return <div className={stl.dialog} className={stl.bubbleUsers}>
        <div className={stl.avatar}>
        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
        </div>
        <NavLink to={path} className={stl.bubbleUsersText}>{props.name} </NavLink>
    </div>
}

export default DialogsFiends;