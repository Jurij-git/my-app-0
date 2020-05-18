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

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hello', likesCount: 100},
            {id: 2, message: 'how are you', likesCount: 200},
            {id: 3, message: 'fine, and you', likesCount: 300},
            {id: 4, message: 'fine, and you4', likesCount: 4},
        ]
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

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 55
    };
    //alert('bl');

    state.profilePage.posts.push(newPost);  //add new element to the end
    debugger;
}

export default state;