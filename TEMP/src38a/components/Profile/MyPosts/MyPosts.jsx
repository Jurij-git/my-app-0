import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{

    // //data from server
    // let posts = [
    //     {id: 1, message: 'hello', likesCount: 100},
    //     {id: 2, message: 'how are you', likesCount: 200},
    //     {id: 3, message: 'fine, and you', likesCount: 300},
    // ]

    //convert posts to <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef();

    //pass this function to button - callback
    let addPost = () => {
        //debugger;
        let text = newPostElement.current.value;
        //alert('ui');
        // props.addPost(text); //text ne nado uze, vozmiot e usebia state
        //props.addPost();
        props.dispatch({type:'ADD-POST'});
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        console.log(text);
        //props.updateNewPostText(text);
        props.dispatch({type:'UPDATE-NEW-POST-TEXT',newText: text});
    }

    return <div className={s.postsBlock}>
        <div>
            My posts
            <div>
                <div>
                    {/*<textarea ref={newPostElement}></textarea>*/}
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>*/}
                {/*<Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}
                {/*<Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>*/}
            </div>
        </div>
    </div>
}

export default MyPosts;