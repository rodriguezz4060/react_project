import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reduscer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, msg: 'How are you dude', likeCount: 12},
                {id: 2, msg: 'Hi its my first post', likeCount: 15},
                {id: 3, msg: 'My first post', likeCount: 11}
            ],
            NewPostText: ''
        },
        messagesPage: {
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
        },
        navigationBar: {
            Navigation: [
                {path: 'profile', name: 'Profile'},
                {path: 'dialogs', name: 'Messages'},
                {path: 'news', name: 'News'},
                {path: 'music', name: 'Music'},
                {path: 'settings', name: 'Settings'}
            ]
        },
        avatarBase: {
            Avatars: [
                {
                    avtrUsr: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
                    name: 'Igor'
                },
                {
                    avtrUsr: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
                    name: 'Sasha'
                },
                {
                    avtrUsr: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
                    name: 'Dima'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    /*ипорт ререндера*/
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        /*Обработчик набора сообщений в PROFILE*/
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        /*Обработчик набора сообщений в dialogs*/
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);

    }
}

export default store;