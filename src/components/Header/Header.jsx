import React from 'react';
import s from './Header.module.css';

const Header = () =>{
    return (
        <header className={s.header}>
            <img
                  src='https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300'
                  alt="logo"/>
        </header>
    );
}

export default Header;