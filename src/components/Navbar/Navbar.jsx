import React from 'react';
import stl from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import MyFriends from "./MyFriends/MyFriends";

const Navbar = (props) => {

    let Navigate = props.stateData.Navigation.map(nvg => <div>
            <NavLink to={nvg.path} className={navData => navData.isActive ? stl.active : stl.item}>{nvg.name} </NavLink>
        </div>
    )

    let UserAvatars = props.stateAvatar.Avatars.map(ava => <img src={ava.avtrUsr} />)

    return (
        <nav className={stl.nav}>
            <div>
                <div className={stl.navBar}>
                    {Navigate}
                </div>
                <div className={stl.navBar}>
                    <div className={stl.titleFrends}>
                        My Friends
                    </div>
                    <div className={stl.avatar}>
                    {UserAvatars}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;