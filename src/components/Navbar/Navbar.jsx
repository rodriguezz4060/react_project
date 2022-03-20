import React from 'react';
import stl from './Navbar.module.css'

const Navbar = () => {
    return <nav className={stl.nav}>
        <div className={stl.item}>
            <a href="/profile"> Profile</a>
        </div>
        <div className={`${stl.item} ${stl.active}`}>
            <a href="/dialogs">Messages</a>
        </div>
        <div className={stl.item}>
            <a href="/news">News</a>
        </div>
        <div className={stl.item}>
            <a href='/music'>Music</a>
        </div>
        <div className={stl.item}>
            <a href='/settings'>Settings</a>
        </div>
    </nav>
}

export default Navbar;