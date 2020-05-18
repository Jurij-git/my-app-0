const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {id: 1, photoUrl:'https://zombietar.framiq.com/assets/moreAvatars/flagtar00.png', followed: true, fullname: 'Christine', status: 'walking', location: {city: 'New York', country:'US'}},
        // {id: 2, photoUrl:'https://zombietar.framiq.com/assets/moreAvatars/piratetar04.png', followed: false, fullname: 'Alex', status: 'busy', location: {city: 'Minsk', country:'Belarus'}},
        // {id: 3, photoUrl:'https://zombietar.framiq.com/assets/moreAvatars/trekkietar04.png', followed: false, fullname: 'Andrew', status: 'working', location: {city: 'Jacksonville', country:'US'}},
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            //debugger;
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return{...u, followed: true}    //copy, and update one field - followed
                    }
                    return u;
                })
            };
        case UNFOLLOW:

            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return{...u, followed: false}    //copy, and update one field - followed
                    }
                    return u;
                })
            };
            return stateCopy;
        case SET_USERS:
            return {
                ...state,
                //users: action.users
                users: [...state.users, action.users.action]   //state users + action users
            };
        default:
            return state;
    }
}

//usersPage follow
export const followAC = (userId) =>{
    return {
        type: FOLLOW,
        userId
    }
}
//usersPage unfollow
export const unfollowAC = (userId) =>{
    return {
        type: UNFOLLOW,
        userId
    }
}
//usersPage get users list from server
export const setUsersAC = (userId) =>{
    return {
        type: SET_USERS
    }
}

export default usersReducer;