import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [], 
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                //users: [...state.users, ...action.users]   //state users + action users
                users: action.users  //state users = action users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            };
        default:
            return state;
    }
}

//usersPage follow
export const follow = (userId) =>{
    return {
        type: FOLLOW,
        userId
    }
}
//usersPage unfollow
export const unfollow = (userId) =>{
    return {
        type: UNFOLLOW,
        userId
    }
}
//usersPage get users list from server
export const setUsers = (users) =>{
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) =>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) =>{
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) =>{
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleFollowingProgress = (isFetching, userId) =>{
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching, userId
    }
}

//thunk to group some dispatches
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export default usersReducer;