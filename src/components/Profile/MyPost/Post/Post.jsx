import React from 'react';
import stl from './Post.module.css';

const Post = (props) => {
    return (
        <div className={stl.item}>
            <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
            {props.messages}
            <div>
                <span>{props.likeCount} Like</span>
            </div>
        </div>
    )
}

export default Post;