import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

/*const MyPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPost addPost={addPost} updateNewPostText={onPostChange}
                postsData={state.profilePage.postsData}
                NewPostText={state.profilePage.NewPostText}
            />
    )
}*/

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        NewPostText: state.profilePage.NewPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;