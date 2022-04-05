const ADD_MESSAGES = 'ADD-MESSAGES';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
        dialogsData: [
            {id: 1, name: "Igor"},
            {id: 2, name: "Viktor"},
            {id: 3, name: "Sasha"},
            {id: 4, name: "Valera"}
        ],
        messagesData: [
            {id: 1, msg: 'Hi friend'},
            {id: 2, msg: 'hi hi hi wasap'},
            {id: 3, msg: 'props is nice'}
        ],
        NewMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
    /*Обработчик набора сообщений в dialogs*/
    switch (action.type) {
        case ADD_MESSAGES: {
            let newMessage = {
                id: 4,
                msg: state.NewMessageText,
            }
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage);
            stateCopy.NewMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.NewMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGES});
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default messagesReducer;