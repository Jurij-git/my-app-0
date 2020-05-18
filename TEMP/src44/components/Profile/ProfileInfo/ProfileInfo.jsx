import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <img src = "https://www.visittci.com/core/cover-governors-beach-grand-turk-on-a-calm-day_1024x341.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;