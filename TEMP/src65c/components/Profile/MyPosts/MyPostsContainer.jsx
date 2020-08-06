import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () =>{
//     //let state = props.store.getState();
//
//
//     return (
//         <StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = store.getState();
//
//                 //pass this function to button - callback
//                 let onAddPost = () => {
//                     let action = addPostActionCreator();
//                     store.dispatch(action);//callback
//                 }
//                 let onPostChange = (text) =>{
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);//callback
//                 }
//
//                 return(
//                     <MyPosts updateNewPostText={onPostChange}
//                     addPost={onAddPost}
//                     posts={store.getState().profilePage.posts}
//                     newPostText={store.getState().profilePage.newPostText}
//                     />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }


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
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
}

//create container component using react-redux, and connect it to store
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;