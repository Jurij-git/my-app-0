import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const  = () => {
//
//     //let state = store.getState().dialogsPage;
//     return (
//         <StoreContext.Consumer>
//         {
//             (store) => {
//                 let onSendMessageClick = () => {
//                     let action = sendMessageCreator();
//                     store.dispatch(action);
//                 }
//
//                 let onNewMessageChange = (body) => {
//                     let action = updateNewMessageBodyCreator(body);
//                     store.dispatch(action);
//                 }
//
//                 return (
//                     <Dialogs updateNewMessageBody={onNewMessageChange}
//                              sendMessage={onSendMessageClick}
//                              dialogsPage={store.getState().dialogsPage}
//                     />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

//using react-redux library
//set data/state from store
let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
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

//create container component using react-redux, and connect it to store
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;