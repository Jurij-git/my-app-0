const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hello', likesCount: 100},
        {id: 2, message: 'how are you', likesCount: 200},
        {id: 3, message: 'fine, and you', likesCount: 300},
        {id: 4, message: 'fine, and you4', likesCount: 4},
    ],
    newPostText: 'newText'
};

const profileReducer = (state = initialState, action) =>{
    //debugger;
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}; //copy state
            stateCopy.newPostText = action.newText;  //update new text by element
            return stateCopy;
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state}; //copy state
            stateCopy.posts = [...state.posts];    //copy posts
            stateCopy.posts.push(newPost);  //add new element to the end
            stateCopy.newPostText = '';   //null it here, in BL
            return stateCopy;
        }
        default:
            return state;
    }


    // if(action.type == ADD_POST){
    //     let newPost = {
    //         id: 5,
    //         message: state.newPostText,
    //         likesCount: 0
    //     };
    //     state.posts.push(newPost);  //add new element to the end
    //     state.newPostText = '';   //null it here, in BL
    //
    // }
    // else if(action.type == UPDATE_NEW_POST_TEXT){
    //     state.newPostText = action.newText;  //update new text by element
    // }

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

export default profileReducer;