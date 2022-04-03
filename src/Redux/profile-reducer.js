const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, msg: 'How are you dude', likeCount: 12},
        {id: 2, msg: 'Hi its my first post', likeCount: 15},
        {id: 3, msg: 'My first post', likeCount: 11}
    ],
    NewPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                msg: state.NewPostText,
                likeCount: 0
            };
            state.postsData.push(newPost);
            state.NewPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;