import React from 'react';
import stl from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={stl.nav}>
        <div>
            <NavLink to="/profile" className={ navData => navData.isActive ? stl.active : stl.item }>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className={ navData => navData.isActive ? stl.active : stl.item }>Messages</NavLink>
        </div>
        <div>
            <NavLink to="/news" className={ navData => navData.isActive ? stl.active : stl.item }>News</NavLink>
        </div>
        <div>
            <NavLink to="/music" className={ navData => navData.isActive ? stl.active : stl.item }>Music</NavLink>
        </div>
        <div>
            <NavLink to="/settings" className={ navData => navData.isActive ? stl.active : stl.item }>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;