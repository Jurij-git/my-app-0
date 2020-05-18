import React from 'react';
import ReactDOM from 'react-dom';
//import state from './redux/state';
import {addPost, updateNewPostText} from './redux/state';
import {BrowserRouter, Route} from "react-router-dom";
import App from './App';


export let rerenderEntireTree = (state) =>(
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,document.getElementById('root')
    )
)
