import React from 'react';
import stl from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={stl.posts}>
                <Post messages='How are you dude' likeCount='15'/>
                <Post messages='Hi its my first post' likeCount='20'/>
            </div>
        </div>
    )
}

export default MyPost;