import {authAPI, profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
        {id: 1, message: 'hello', likesCount: 100},
        {id: 2, message: 'how are you', likesCount: 200},
        {id: 3, message: 'fine, and you', likesCount: 300},
        {id: 4, message: 'fine, and you4', likesCount: 4},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost], //copy, and add new element to the end
                newPostText: ''   //null it here, in BL
            };

        }
        case SET_USER_PROFILE: {
            return {
                ...state,   //copy state
                profile: action.profile   //update profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,   //copy state
                status: action.status   //update status
            }
        }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        default:
            return state;
    }
}

//profilePage
export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

//thunk
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

//thunk
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

//thunk
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;