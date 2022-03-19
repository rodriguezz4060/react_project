import React from 'react';
import stl from './Profile.module.css';

const Profile = () => {
    return <div className={stl.content}>
        <div>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
        </div>
        <div>
            ava+description
        </div>
        <div>
            My post
            <div>
                New post
            </div>
            <div className={stl.posts}>
                <div className={stl.item}>
                    post 1
                </div>
                <div className={stl.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;