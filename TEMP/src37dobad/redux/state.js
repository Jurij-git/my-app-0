//data from server
// let posts = [
//     {id: 1, message: 'hello', likesCount: 100},
//     {id: 2, message: 'how are you', likesCount: 200},
//     {id: 3, message: 'fine, and you', likesCount: 300},
// ]
//
// let dialogs = [
//     {id: 1, name: 'Christine'},
//     {id: 2, name: 'Pablo'},
//     {id: 3, name: 'Alexia'},
//     {id: 4, name: 'Alex'},
//     {id: 5, name: 'John'},
//     {id: 6, name: 'Mary'},
// ]
//
// let messages = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'Hello'},
//     {id: 3, message: 'Yo'},
//     {id: 4, message: 'ff'},
//     {id: 5, message: 'vv'},
//     {id: 6, message: 'nn'},
// ]



//import {rerenderEntireTree} from "../index";

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
            ]
        }
    },
    getState(){
        return(this._state);
    },
    _callSubscriber (){
        console.log('state was changed');
    },
    addPost(){
        //debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        //alert('bl');

        this._state.profilePage.posts.push(newPost);  //add new element to the end
        this._state.profilePage.newPostText = '';//nulim v bl'
        //debugger;
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText){
        this._state.profilePage.newPostText = newText;  //update new text by element
        //alert('bl');
        this._callSubscriber(this._state);
    },
    subscribe (observer){
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;