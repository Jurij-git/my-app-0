import React from 'react';
import s from './Post.module.css';

const Post = (props) =>{
    return <div className={s.posts}>
                <div className={s.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUdEyqt1RY9f1S7mCyEN3SeOWAzIQz5UYrQHmDBZmgNuzSU8Mp&usqp=CAU'/>
                    {props.message}
                    <div>
                        <span>like </span> {props.likesCount}
                    </div>
                </div>
    </div>
}

export default Post;