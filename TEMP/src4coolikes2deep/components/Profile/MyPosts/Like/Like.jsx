import React from 'react';
import s from './Like.module.css';

const Like = (props) =>{
    return <div>
        <span>{props.likes}</span>
    </div>
}

export default Like;