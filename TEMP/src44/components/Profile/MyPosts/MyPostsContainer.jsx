import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = () =>{
    //let state = props.store.getState();


    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                //pass this function to button - callback
                let onAddPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);//callback
                }
                let onPostChange = (text) =>{
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);//callback
                }

                return(
                    <MyPosts updateNewPostText={onPostChange}
                    addPost={onAddPost}
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;