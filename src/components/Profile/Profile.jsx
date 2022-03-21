import React from 'react';
import MyPost from './MyPost/MyPost';
import stl from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";

const Profile = () => {
    return (
        <div className={stl.profileWrapper}>
            <ProfileInfo/>
            <div>
                <MyPost/>
            </div>
        </div>
    )
}

export default Profile;