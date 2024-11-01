import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Kolya
                </div>
                <div className={s.dialog}>
                    Nikita
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>HI</div>
            </div>
        </div>
    );
};

export default Dialogs;