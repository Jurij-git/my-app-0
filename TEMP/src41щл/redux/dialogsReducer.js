const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;  //update new text by element
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';   //null it here, in BL
            state.messages.push({id: 7, message: body});  //add new element to the end
            return state;
        default:
            return state;
    }

    // if(action.type == UPDATE_NEW_MESSAGE_BODY){
    //     state.newMessageBody = action.body;  //update new text by element
    // }
    // else if(action.type == SEND_MESSAGE){
    //     let body = state.newMessageBody;
    //     state.newMessageBody = '';   //null it here, in BL
    //     state.messages.push({id: 7, message: body});  //add new element to the end
    // }
}

//dialogsPage
export const sendMessageCreator = () =>{
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) =>{
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;