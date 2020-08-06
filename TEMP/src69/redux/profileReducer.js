import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'hello', likesCount: 100},
        {id: 2, message: 'how are you', likesCount: 200},
        {id: 3, message: 'fine, and you', likesCount: 300},
        {id: 4, message: 'fine, and you4', likesCount: 4},
    ],
    newPostText: 'newText',
    profile: null
};

const profileReducer = (state = initialState, action) =>{
    //debugger;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost], //copy, and add new element to the end
                newPostText: ''   //null it here, in BL
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,   //copy state
                newPostText: action.newText   //update new text by element
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,   //copy state
                profile: action.profile   //update profile
            }
        }
        default:
            return state;
    }
}

//profilePage
export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) =>{
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

//thunk
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReducer;