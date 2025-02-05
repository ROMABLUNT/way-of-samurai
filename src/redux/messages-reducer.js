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
};

export const messagesReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
    
        default:
            return state;
    }    

};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default messagesReducer;