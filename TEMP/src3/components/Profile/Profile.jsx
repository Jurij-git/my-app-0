import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return <div className={s.content}>
        <div>
            <img src = "https://www.visittci.com/core/cover-governors-beach-grand-turk-on-a-calm-day_1024x341.jpg"/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
{/*        <div>
            My post
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>*/}
    </div>
}

export default Profile;