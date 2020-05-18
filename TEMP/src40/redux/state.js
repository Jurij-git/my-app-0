

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

        if(action.type == ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);  //add new element to the end
            this._state.profilePage.newPostText = '';   //null it here, in BL
            this._callSubscriber(this._state);  //refresh
        }
        else if(action.type == UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;  //update new text by element
            this._callSubscriber(this._state);  //refresh
        }

        else if(action.type == UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;  //update new text by element
            this._callSubscriber(this._state);  //refresh
        }
        else if(action.type == SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';   //null it here, in BL
            this._state.dialogsPage.messages.push({id: 7, message: body});  //add new element to the end
            this._callSubscriber(this._state);  //refresh
        }
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
