import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login'
import { compose } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp, initializedSuccess } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
}

   render() {
    if (!this.props.initialized)
    {
      return <Preloader />
    }
   }

  render() {

      return (
        <Router>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav/>
          <div className='app-wrapper-content'>
               <Routes>
                <Route path="/profile/:userId?" element={<ProfileContainer />} />
                <Route path="/dialogs/*" element={<DialogsContainer/>} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/users" element={<UsersContainer />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
          </div>
        </div>
        </Router>
      );
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose( connect(mapStateToProps, {initializeApp}) (App));
