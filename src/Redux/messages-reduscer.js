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
        case ADD_MESSAGES:
            let newMessage = state.NewMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, msg: newMessage}],
                NewMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                NewMessageText: action.newText
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGES});
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default messagesReducer;