import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = "/dialogs/"+ props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) =>{
    return <div className={s.dialog}>{props.message}</div>
}


const Dialogs = (props) => {
    return(
        <div>
            <div className = {s.dialogs}>
                <div className={s.dialogItems}>
                    <DialogItem name='Christine' id='1'/>
                    <DialogItem name='Pablo' id='2'/>
                    <DialogItem name='Alexia' id='3'/>
                    <DialogItem name='Alex' id='4'/>
                    <DialogItem name='John' id='5'/>
                    <DialogItem name='Mary' id='6'/>
                </div>
                <div className={s.messages}>
                    <Message message = 'Hi'/>
                    <Message message = 'Hello'/>
                    <Message message = 'Yo'/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;