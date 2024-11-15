import ReactDOM from "react-dom";
import React from 'react';
import App from "./App";
import { addPost, subscribe, updateNewPostText } from "./redux/state";
import state from "./redux/state";

let rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
          <App state={state} addPost = {addPost} updateNewPostText = {updateNewPostText} />
        </React.StrictMode>
      );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);