import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let posts = [
  {id:1, message: 'post1', likesCount: '4'},
  {id:2, message: 'post2', likesCount: '4'},
  {id:3, message: 'post3', likesCount: '4'},
  {id:4, message: 'post4', likesCount: '4'}
];

let dialogs = [
  {id:1, name: 'Dimych'},
  {id:2, name: 'Andrew'},
  {id:3, name: 'Sveta'},
  {id:4, name: 'Sasha'},
];
let messages = [
  {id:1, message: 'Dimych1'},
  {id:2, message: 'Andrew2'},
  {id:3, message: 'Sveta5'},
  {id:4, message: 'Sasha3'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);
