import React from "react";
import s from './ProfileInfo.module.css';

const ProfileStatus = (props) =>{
    return(
        <div>
            <div>
                <span>[props.status]</span>
            </div>
            <div>
                 <input>[props.status]</input>
            </div>
        </div>
    )
}

export default ProfileStatus;