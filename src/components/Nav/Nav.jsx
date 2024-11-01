import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={s.nav}>
          <div className={s.item}>
            <NavLink className={navData => navData.isActive ? s.active : s.item} to='/profile'><p>Profile</p></NavLink>
          </div>
          <div className={s.item}>
            <NavLink className={navData => navData.isActive ? s.active : s.item} to='/dialogs'><p>Messages</p></NavLink>
          </div>
          <div className={s.item}>
          <NavLink className={navData => navData.isActive ? s.active : s.item} to='/news'><p>News</p></NavLink>
          </div>
          <div className={s.item}>
          <NavLink className={navData => navData.isActive ? s.active : s.item} to='/music'><p>Music</p></NavLink>
          </div>
          <div className={s.item}>
          <NavLink className={navData => navData.isActive ? s.active : s.item} to='/settings'><p>Settings</p></NavLink>
          </div>
        </nav>
    );
};
export default Nav;