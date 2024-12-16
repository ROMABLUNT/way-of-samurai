import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Friend from "./Friend/Friend";

const Nav = (props) => {

  // let navBarElements = props.friends.map(b => <Friend friend={b.friend} />)

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
          {/* <div>
            <h3 className={s.friendsH3}>Friends</h3>
            <div className={s.friends}>
              {navBarElements}
            </div>
          </div> */}
        </nav>
    );
};
export default Nav;