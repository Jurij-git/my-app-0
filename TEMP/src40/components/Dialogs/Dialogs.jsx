import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    //convert Dialogs to <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    //convert messages to <Message message = {messagesData[0].message}/>
    let messagesElements = state.messages.map( message => <Message message = {message.message}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        //alert('ggg');
        debugger;
        let action = sendMessageCreator();
        props.store.dispatch(action);
    }

    let onNewMessageChange = (e) =>{
        //debugger;
        let body = e.target.value;    //do not use ref in this case, use target
        // eslint-disable-next-line no-undef
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    }

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