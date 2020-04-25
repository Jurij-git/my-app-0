import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () =>{
    return <div className={s.postsBlock}>
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='hello' likesCount='100'/>
                <Post message='how are you' likesCount='200'/>
                <Post message='fine, and you' likesCount='300'/>
            </div>
        </div>
    </div>
}

export default MyPosts;