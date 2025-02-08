import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {useNavigate} from 'react-router-dom'
import React, {useEffect} from 'react';
import AddMessageForm from "./AddMessageForm/AddMessageForm"

const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} /> );

    let messagesElements = state.messages.map((m) => <MessageItem message={m.message} key={m.id} /> );
    
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        alert(values.newMessageBody);
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
            </div>
            <AddMessageForm  onSubmit={addNewMessage}/>
        </div>
    );
};



export default Dialogs;