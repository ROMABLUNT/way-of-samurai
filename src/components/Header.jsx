import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
        <div >
          <img className={s.img} src='https://static.vecteezy.com/system/resources/thumbnails/024/553/676/small_2x/skull-wearing-crown-logo-skull-king-sticker-pastel-cute-colors-generative-ai-png.png'/>
        </div>
      </header>
    );
};
export default Header;
