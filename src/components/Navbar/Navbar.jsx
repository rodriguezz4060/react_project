import React from 'react';
import stl from './Navbar.module.css'

const Navbar = () => {
    return <nav className={stl.nav}>
        <div className={stl.item}> 
            <a>Profile</a>
        </div>
        <div className={`${stl.item} ${stl.active}`}>
            <a>Messages</a>
        </div>
        <div className={stl.item}>
            <a>Music</a>
        </div>
        <div className={stl.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;