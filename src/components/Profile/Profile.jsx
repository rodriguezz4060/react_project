import React from 'react';
import MyPost from './MyPost/MyPost';
import stl from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";

const Profile = (props) => {


    return (
        <div className={stl.profileWrapper}>
            <ProfileInfo/>
            <div>
                <MyPost postsData={props.stateData.postsData}/>
            </div>
        </div>
    )
}

export default Profile;