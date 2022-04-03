import React from 'react';
import stl from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
debugger;
    return (
        <div className={stl.profileWrapper}>
            <ProfileInfo/>
            <div>
                <MyPostContainer store={props.store}
                />
            </div>
        </div>
    )
}

export default Profile;