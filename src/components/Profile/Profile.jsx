import React from 'react';
import MyPost from './MyPost/MyPost';
import stl from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";


const Profile = (props) => {
debugger;
    return (
        <div className={stl.profileWrapper}>
            <ProfileInfo/>
            <div>
                <MyPost postsData={props.stateData.postsData}
                        dispatch={props.dispatch}
                        NewPostText={props.stateData.NewPostText}
                />
            </div>
        </div>
    )
}

export default Profile;