import React from 'react';
import stl from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElement = props.postsData.map ( p => <Post messages={p.msg} likeCount={p.likeCount}/> )

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
                { postsElement }
            </div>
        </div>
    )
}

export default MyPost;