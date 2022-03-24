import React from 'react';
import stl from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElement = props.postsData.map ( p => <Post messages={p.msg} likeCount={p.likeCount}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={stl.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.NewPostText}/>
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