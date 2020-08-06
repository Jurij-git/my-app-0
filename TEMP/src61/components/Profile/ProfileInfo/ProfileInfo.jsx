import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) =>{
    return(
        <div>
            <div>
                <img src = "https://www.visittci.com/core/cover-governors-beach-grand-turk-on-a-calm-day_1024x341.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    )
}

export default ProfileInfo;