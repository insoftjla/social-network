import React from 'react';
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
    <nav className={style.sidebar}>
        <div className={style.item}>
            <NavLink to='/profile' activeClassName={style.activeLink} >Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/dialogs' activeClassName={style.activeLink}>Message</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/allusers' activeClassName={style.activeLink}>All Users</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/news' activeClassName={style.activeLink}>News</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink>
        </div>
    </nav>
    );
}

export default Sidebar;