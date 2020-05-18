import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    //convert Dialogs to <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);



    //convert messages to <Message message = {messagesData[0].message}/>
    let messagesElements = props.state.messages.map( message => <Message message = {message.message}/>)

    return(
        <div>
            <div className = {s.dialogs}>
                <div className={s.dialogItems}>

                    {dialogsElements}

                    {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                    {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                    {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                    {/*<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}
                    {/*<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>*/}
                    {/*<DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>*/}
                </div>
                <div className={s.messages}>
                    {messagesElements}

                    {/*<Message message = {messagesData[0].message}/>*/}
                    {/*<Message message = {messagesData[1].message}/>*/}
                    {/*<Message message = {messagesData[2].message}/>*/}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;