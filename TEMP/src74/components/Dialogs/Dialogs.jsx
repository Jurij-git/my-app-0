import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    //convert Dialogs to <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    //convert messages to <Message message = {messagesData[0].message}/>
    let messagesElements = state.messages.map( message => <Message message = {message.message} key={message.id}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return(
        <div>
            <div className = {s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                            <textarea
                                value={newMessageBody}
                                placeholder='Enter your message'
                                onChange={onNewMessageChange}>
                            </textarea>
                        </div>
                        <div><button onClick={onSendMessageClick}>Send</button> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;