import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component="textarea"/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) =>{

    //convert posts to <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    //pass this function to button - callback
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={s.postsBlock}>
        <div>
            My posts
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    </div>
}

export default MyPosts;