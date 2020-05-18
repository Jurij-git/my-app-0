import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) =>{
    let state = props.store.getState();

    //pass this function to button - callback
    let onAddPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);//callback
    }
    let onPostChange = (text) =>{
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);//callback
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={onAddPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
    />
}

export default MyPostsContainer;