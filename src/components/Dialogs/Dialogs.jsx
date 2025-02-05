import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {useNavigate} from 'react-router-dom'
import React, {useEffect} from 'react';
import {Field, reduxForm} from "redux-form";

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
            <AddMessageFormRedux  onSubmit={addNewMessage}/>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;