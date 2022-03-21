import React from 'react';
import MyPost from './MyPost/MyPost';
import stl from './Profile.module.css';

const Profile = () => {
    return <div className={stl.profileWrapper}>
        <div className={stl.profileWallpeper}>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
        </div>
        <div className={stl.description}>
            ava+description
        </div>
        <div className={stl.myPosts}>
            <MyPost/>
        </div>
    </div>
}

export default Profile;