import React from 'react';
import s from './Profile.module.css';

const Profile = () =>{
    return <div className={s.content}>
        <div>
            <img src = "https://www.forumdaily.com/wp-content/uploads/2016/06/Depositphotos_28019327_m-2015.jpg"/>
        </div>
        <div>
            ava + description
        </div>
        <div>
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
        </div>
    </div>
}

export default Profile;