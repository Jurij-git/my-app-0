const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
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
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return{
                ...state,
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
export const sendMessageCreator = (newMessageBody) =>{
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}

export default dialogsReducer;