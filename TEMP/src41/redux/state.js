import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello', likesCount: 100},
                {id: 2, message: 'how are you', likesCount: 200},
                {id: 3, message: 'fine, and you', likesCount: 300},
                {id: 4, message: 'fine, and you4', likesCount: 4},
            ],
            newPostText: 'newText'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber (){
        console.log('state was changed');
    },
    getState(){
        //debugger;
        return(this._state);
    },
    subscribe (observer){
        this._callSubscriber = observer;
    },
    dispatch(action){   //{type: 'ADD-TEXT'}
        //debugger;
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);  //refresh
    }
}

//profilePage
export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) =>{
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
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

export default store;
window.store = store;
