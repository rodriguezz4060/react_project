const ADD_MESSAGES = 'ADD-MESSAGES';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    /*Обработчик набора сообщений в dialogs*/
    switch (action.type) {
        case ADD_MESSAGES:
            let newMessage = {
                id: 4,
                msg: state.NewMessageText,
            }
            state.messagesData.push(newMessage);
            state.NewMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.NewMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGES});
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default messagesReducer;