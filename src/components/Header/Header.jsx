import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
        <div >
          <img className={s.img} src='https://static.vecteezy.com/system/resources/thumbnails/024/553/676/small_2x/skull-wearing-crown-logo-skull-king-sticker-pastel-cute-colors-generative-ai-png.png'/>
        </div>
        <div className={s.loginBlock}>
          {props.isAuth ? props.login 
            : <NavLink to={'/login'}>Login</NavLink> }
          
        </div>
      </header>
    );
};
export default Header;
