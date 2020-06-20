import React from "react";
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>messages</NavLink>
            </div>
            <div className={s.item}>
                <a>news</a>
            </div>
            <div className={s.item}>
                <a>music</a>
            </div>
            <div className={s.item}>
                <a>settings</a>
            </div>

        </nav>
    );
}

export  default Nav;