import React from 'react';
import stl from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = () => {
    return (
        <div className={stl.profileWrapper}>
            <ProfileInfo/>
            <div>
                <MyPostContainer />
            </div>
        </div>
    )
}

export default Profile;