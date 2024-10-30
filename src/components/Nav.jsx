import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
          <div className={s.item}>
            <p>Profile</p>
          </div>
          <div className={s.item}>
            <p>Messages</p>
          </div>
          <div className={s.item}>
            <p>News</p>
          </div>
          <div className={s.item}>
            <p>Music</p>
          </div>
          <div className={s.item}>
            <p>Settings</p>
          </div>
        </nav>
    );
};
export default Nav;