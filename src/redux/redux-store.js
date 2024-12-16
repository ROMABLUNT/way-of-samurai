import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sideBarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    sideBar: sideBarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;