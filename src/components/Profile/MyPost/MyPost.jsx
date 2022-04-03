import React from 'react';
import stl from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElement = props.postsData.map ( p => <Post messages={p.msg} likeCount={p.likeCount}/> )

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (el) => {
        let text = el.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={stl.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea placeholder='Type you message' onChange={onPostChange}
                          value={props.NewPostText}/>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={stl.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPost;