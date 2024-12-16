const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
        dialogs: [        
            {id:1, name: 'Dimych'},
            {id:2, name: 'Andrew'},
            {id:3, name: 'Sveta'},
            {id:4, name: 'Sasha'}
        ],
        messages: [
            {id:1, message: 'Dimych1'},
            {id:2, message: 'Andrew2'},
            {id:3, message: 'Sveta5'},
            {id:4, message: 'Sasha3'}
        ],
        newMessageBody: ""
};

export const messagesReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };
    
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };
    
        default:
            return state;
    }    

};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body,});


export default messagesReducer;