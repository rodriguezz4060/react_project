let initialState = {
    Navigation: [
        {path: 'profile', name: 'Profile'},
        {path: 'dialogs', name: 'Messages'},
        {path: 'news', name: 'News'},
        {path: 'music', name: 'Music'},
        {path: 'settings', name: 'Settings'}
    ],
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
};


const navigationBarReducer = (state = initialState, action) => {
    return state;
}

export default navigationBarReducer;