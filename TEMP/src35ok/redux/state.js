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

let state = {
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
}

let rerenderEntireTree = (state) => {
    console.log('state was changed');

}

// export let addPost = (postMessage) => {
export let addPost = () => {
    //debugger;
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 55
    };
    //alert('bl');

    state.profilePage.posts.push(newPost);  //add new element to the end
    state.profilePage.newPostText = '';//nulim v bl'
    //debugger;
    rerenderEntireTree(state);

}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;  //update new text by element
    //alert('bl');
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;