import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from "../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default withAuthRedirect(DialogsContainer);