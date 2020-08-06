import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

//using react-redux library
//set data/state from store
let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage//,
        //isAuth: state.auth.isAuth
    }
}

//set callbacks
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            //debugger;
            let action = updateNewMessageBodyCreator(body);
            dispatch(action);
        },
        sendMessage: () => {
            let action = sendMessageCreator();
            dispatch(action);
        }
    }
}

//create HOC on Dialogs
let AuthRedirectComponent = withAuthRedirect(Dialogs);

//create container component using react-redux, and connect it to store
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;