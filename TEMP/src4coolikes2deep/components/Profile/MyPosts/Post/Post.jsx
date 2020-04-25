import React from 'react';
import Like from "../Like/Like";
import s from './Post.module.css';

const Post = (props) =>{
    return <div className={s.posts}>
                <div className={s.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUdEyqt1RY9f1S7mCyEN3SeOWAzIQz5UYrQHmDBZmgNuzSU8Mp&usqp=CAU'/>
                    {/*post 1*/}
                    {props.message}
                    {/*<Like likes='9'/>*/}
                    {/*let like_qty = {props.likes}*/}
                    {/*//use base props in child*/}
                    <Like likes = {props.likes}/>
                </div>
    </div>
}

export default Post;