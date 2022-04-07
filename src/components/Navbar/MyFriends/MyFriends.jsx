import React from 'react';
import stl from './../Navbar.module.css'

const MyFriends = (props) => {

    let UserAvatars = props.stateData.Avatars.map(ava => <img src={ava.avtrUsr} key={ava.id}/>)

    return (
        <div>
            <div className={stl.titleFrends}>
                My Friends
            </div>
            <div className={stl.avatar}>
                {UserAvatars}
            </div>
        </div>
    )
}

export default MyFriends;