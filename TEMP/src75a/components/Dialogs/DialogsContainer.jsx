import React from 'react';
import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        sendMessage: (newMessageBody) => {
            let action = sendMessageCreator(newMessageBody);
            dispatch(action);
        }
    }
}



//create HOC on Dialogs
// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// //create container component using react-redux, and connect it to store
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;


export default compose(
    connect(mapStateToProps, mapDispatchToProps),   //2
    withAuthRedirect    //1
)
(Dialogs);;