import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return <div>
        <div>
            <img src = "https://www.visittci.com/core/cover-governors-beach-grand-turk-on-a-calm-day_1024x341.jpg"/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;