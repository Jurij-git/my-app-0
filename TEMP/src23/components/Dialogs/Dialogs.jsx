import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = "/dialogs/"+ props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
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

                    {/*<div className={s.dialog}>*/}
                    {/*    <NavLink to="/dialogs/2">Pablo</NavLink>*/}
                    {/*</div>*/}
                    {/*<div className={s.dialog}>*/}
                    {/*    <NavLink to="/dialogs/3">Alexia</NavLink>*/}
                    {/*</div>*/}
                    {/*<div className={s.dialog}>*/}
                    {/*    <NavLink to="/dialogs/4">Alex</NavLink>*/}
                    {/*</div>*/}
                    {/*<div className={s.dialog}>*/}
                    {/*    <NavLink to="/dialogs/5">John</NavLink>*/}
                    {/*</div>*/}
                    {/*<div className={s.dialog}>*/}
                    {/*    <NavLink to="/dialogs/6">Mary</NavLink>*/}
                    {/*</div>*/}
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>Hello</div>
                    <div className={s.message}>Yo</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;