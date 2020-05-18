import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        let action = sendMessageCreator();
        props.store.dispatch(action);
    }

    let onNewMessageChange = (body) =>{
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    }

    return(<Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
    />)
}

export default DialogsContainer;