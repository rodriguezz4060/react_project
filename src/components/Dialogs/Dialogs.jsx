import React from 'react';
import stl from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogsList}>
                <div className={stl.dialog + ' ' + stl.active}>
                    Igor
                </div>
                <div className={stl.dialog}>
                    Viktor
                </div>
                <div className={stl.dialog}>
                    Sasha
                </div>
                <div className={stl.dialog}>
                    Valera
                </div>
            </div>
            <div className={stl.messages}>
                <div className={stl.message}>hi</div>
                <div className={stl.message}>hi hi hi</div>
                <div className={stl.message}>hi you</div>
            </div>
        </div>

    )
}

export default Dialogs;