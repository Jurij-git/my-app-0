const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Christine'},
        {id: 2, name: 'Pablo'},
        {id: 3, name: 'Alexia'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'John'},
        {id: 6, name: 'Mary'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'ff'},
        {id: 5, message: 'vv'},
        {id: 6, message: 'nn'},
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    // let stateCopy = {...state}; //copy state
    // stateCopy.messages = [...state.messages];    //copy messages

    //copy state - toze samoje^^^
    // let stateCopy = {
    //     ...state,
    //     messages: [...state.messages]
    // };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return{
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return{
                ...state,
                newMessageBody: '',   //null it here, in BL
                messages: [...state.messages, {id: 7, message: body}] //add new element to the end
            };
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