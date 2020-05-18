import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{

    //convert posts to <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef(); //ref, baaad

    //pass this function to button - callback
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () =>{
        //debugger;
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postsBlock}>
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} //callback, give onPostChange to onChange
                        ref={newPostElement}    //reference
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    </div>
}

export default MyPosts;