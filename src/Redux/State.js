let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, msg: 'How are you dude', likeCount: 12},
                {id: 2, msg: 'Hi its my first post', likeCount: 15},
                {id: 3, msg: 'My first post', likeCount: 11}
            ],
            NewPostText: 'ReactProject'
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
            NewMessageText: 'simpletext'
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

/*Обработчик набора сообщений в Profile*/
    _callSubscriber() {
    },

    addPost() {
        let newPost = {
            id: 5,
            msg: this._state.profilePage.NewPostText,
            likeCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.NewPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.NewPostText = newText;
        this._callSubscriber(this._state);
    },

/*Обработчик набора сообщений в dialogs*/

    addMessage() {
        let newMessage = {
            id: 4,
            msg: this._state.messagesPage.NewMessageText,
        };
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.NewMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.messagesPage.NewMessageText = newText;
        this._callSubscriber(this._state);
    },

    /*ипорт ререндера*/
    subscriber(observer) {
        this._callSubscriber = observer;
    }
}

export default store;