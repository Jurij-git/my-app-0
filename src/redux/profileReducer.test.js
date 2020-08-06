import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'hello', likesCount: 100},
        {id: 2, message: 'how are you', likesCount: 200},
        {id: 3, message: 'fine, and you', likesCount: 300},
        {id: 4, message: 'fine, and you4', likesCount: 4},
    ]
};

it('new post should be added', () => {
        //1 test data
        let action = addPostActionCreator("new post N5");

        //2 action
        let newState = profileReducer(state, action);

        //3 check
        expect(newState.posts.length).toBe(5);
    }
);

it('message if new post should be corrected', () => {
        //1 test data
        let action = addPostActionCreator("new post N5");

        //2 action
        let newState = profileReducer(state, action);

        //3 check
        expect(newState.posts[4].message).toBe("new post N5");
    }
);

it('after deleting length should be decremented', () => {
        //1 test data
        let action = deletePost(1);

        //2 action
        let newState = profileReducer(state, action);

        //3 check
        expect(newState.posts.length).toBe(3);
    }
);