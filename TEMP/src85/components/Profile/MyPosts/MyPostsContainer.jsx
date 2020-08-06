import React from 'react';
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//using react-redux library
//set data/state from store
let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

//set callbacks for action creators
let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (newPostText) => {
            let action = addPostActionCreator(newPostText);
            dispatch(action);
        }
    }
}

//create container component using react-redux, and connect it to store
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;