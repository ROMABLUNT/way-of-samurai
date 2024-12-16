import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message: 'post1', likesCount: '4'},
                {id:2, message: 'post2', likesCount: '4'},
                {id:3, message: 'post3', likesCount: '4'},
                {id:4, message: 'post4', likesCount: '4'}
            ],
            newPostText: '1',
        },
        messagePage: {
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
        },
        sideBar: {
            friends: [
                {id:1, friend:'Dimych'},
                {id:2, friend:'Sasha'},
                {id:3, friend:'Vitya'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('state');
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) { 

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messagesReducer(this._state.messagePage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}




export default store;
window.store = store;
