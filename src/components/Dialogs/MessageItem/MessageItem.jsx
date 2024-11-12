import React from 'react';
import s from './MessageItem.module.css';

const MessageItem = (props) => {
    let newMessage = React.createRef();
    let sendImage = () => {
        let text = newMessage.current.value;
        alert(text);
    }
    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={sendImage}>Send</button>
            </div>
        </div>

        
    )
}

export default MessageItem;