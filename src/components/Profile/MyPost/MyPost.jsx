import React from 'react';
import stl from './MyPost.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const MyPost = (props) => {

    let postsElement = props.postsData.map ( p => <Post messages={p.msg} likeCount={p.likeCount}/> )

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (el) => {
        let text = el.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={stl.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea placeholder='Type you message' onChange={onPostChange}
                          value={props.NewPostText}/>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={stl.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPost;