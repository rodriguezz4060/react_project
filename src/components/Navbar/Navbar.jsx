import React from 'react';
import stl from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import MyFriends from "./MyFriends/MyFriends";

const Navbar = (props) => {

    let Navigate = props.stateData.Navigation.map(nvg => <div key={nvg.id}>
            <NavLink to={nvg.path} className={navData => navData.isActive ? stl.active : stl.item}>{nvg.name}</NavLink>
        </div>
    )

    return (
        <nav className={stl.nav}>
            <div>
                <div className={stl.navBar}>
                    {Navigate}
                </div>
                <div className={stl.navBar}>
                    <MyFriends stateData={props.stateData}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;