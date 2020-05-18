import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) =>{

    //convert posts to <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef(); //ref, baaad

    //pass this function to button - callback
    let addPost = () => {
        //debugger;
        let text = newPostElement.current.value;
        let action = addPostActionCreator();
        props.dispatch(action);
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        //console.log(text);
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);//callback
    }

    return <div className={s.postsBlock}>
        <div>
            My posts
            <div>
                <div>
                    {/*<textarea ref={newPostElement}></textarea>*/}
                    <textarea onChange={onPostChange} //callback, give onPostChange to onChange
                        ref={newPostElement}    //reference
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
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