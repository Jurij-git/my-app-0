import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    //convert Dialogs to <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);
    //convert messages to <Message message = {messagesData[0].message}/>
    let messagesElements = state.messages.map( message => <Message message = {message.message} key={message.id}/>)
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) =>{
        //alert(values.newMessageBody);
        props.sendMessage(values.newMessageBody);
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
                    <AddMessageFormRedux onSubmit = {addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return(
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter Your Message" />
            </div>
            <div><button>Send</button> </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;