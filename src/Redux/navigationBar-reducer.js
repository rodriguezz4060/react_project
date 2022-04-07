let initialState = {
    Navigation: [
        {id: 1, path: 'profile', name: 'Profile'},
        {id: 2, path: 'dialogs', name: 'Messages'},
        {id: 3, path: 'news', name: 'News'},
        {id: 4, path: 'music', name: 'Music'},
        {id: 5, path: 'settings', name: 'Settings'}
    ],
    Avatars: [
        {
            id: 1,
            avtrUsr: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
            name: 'Igor'
        },
        {
            id: 2,
            avtrUsr: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
            name: 'Sasha'
        },
        {
        id:3,
        avtrUsr: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
            name: 'Dima'
        }
    ]
};


const navigationBarReducer = (state = initialState, action) => {
    return state;
}

export default navigationBarReducer;