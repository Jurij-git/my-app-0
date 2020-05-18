import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {

    //let state = store.getState().dialogsPage;



    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let onSendMessageClick = () => {
                    let action = sendMessageCreator();
                    store.dispatch(action);
                }

                let onNewMessageChange = (body) => {
                    let action = updateNewMessageBodyCreator(body);
                    store.dispatch(action);
                }

                return (
                    <Dialogs updateNewMessageBody={onNewMessageChange}
                             sendMessage={onSendMessageClick}
                             dialogsPage={store.getState().dialogsPage}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )


}

export default DialogsContainer;