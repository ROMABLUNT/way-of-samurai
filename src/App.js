import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
