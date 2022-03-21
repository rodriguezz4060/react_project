import React from 'react';
import stl from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {

    let postsData = [
        {id:1, msg:'How are you dude', likeCount:12},
        {id:2, msg:'Hi its my first post', likeCount:15},
    ]

    return (
        <div className={stl.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={stl.posts}>
                <Post messages={postsData[0].msg} likeCount={postsData[0].likeCount}/>
                <Post messages={postsData[1].msg} likeCount={postsData[1].likeCount}/>
            </div>
        </div>
    )
}

export default MyPost;