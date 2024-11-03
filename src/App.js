import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
           <Routes>
            <Route path="/profile" element={<Profile posts={props.posts} />} />
            <Route path="/dialogs/*" element={<Dialogs  dialogs={props.dialogs} messages={props.messages} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
