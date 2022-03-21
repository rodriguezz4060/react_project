import React from 'react';
import stl from './Profileinfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={stl.profileWallpeper}>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            </div>
            <div className={stl.description}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;