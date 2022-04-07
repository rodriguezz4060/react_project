const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: [
        {
            id: 1,
            profileImg: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg',
            followed: true,
            fullName: 'Igor S.',
            status: 'my status',
            location: {country: 'Ukraine', city: 'Odessa'}
        },
        {
            id: 2,
            profileImg: 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg',
            followed: false,
            fullName: 'NeIgor S.',
            status: 'Ne my status',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, usersData: [...state.usersData, ...action.usersData]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (usersData) => ({type: SET_USERS, usersData});

export default usersReducer;