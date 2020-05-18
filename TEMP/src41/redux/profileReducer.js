const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) =>{

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;  //update new text by element
            return state;
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);  //add new element to the end
            state.newPostText = '';   //null it here, in BL
            return state;
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

export default profileReducer;