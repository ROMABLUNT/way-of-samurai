import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {useNavigate} from 'react-router-dom'
import React, {useEffect} from 'react';

const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} /> );

    let messagesElements = state.messages.map((m) => <MessageItem message={m.message} key={m.id} /> );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

   let navigate = useNavigate()
   useEffect(()=>{
       if(props.isAuth === false){
       return navigate("../login")
   }
   }, [props.isAuth])

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea 
                    placeholder='Enter Your Message' 
                    value = {newMessageBody}
                    onChange={onNewMessageChange}
                    ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;