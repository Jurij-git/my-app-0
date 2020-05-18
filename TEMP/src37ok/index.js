import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import state from './redux/state';
// import {addPost} from './redux/state';
// import {BrowserRouter, Route} from "react-router-dom";


//import state from './redux/state';
//import {addPost, updateNewPostText} from './redux/state';
import {BrowserRouter, Route} from "react-router-dom";
//import {subscribe} from './redux/state';

import store from './redux/state';

export let rerenderEntireTree = (state) =>(
    ReactDOM.render(
        <BrowserRouter>
            {/*<App state={store.getState()}*/}
                 <App state={state}     //ved on uze prishiol . toze samoje
                 addPost={store.addPost.bind(store)}    //bind tak kak tam netu this, tam call ot ojekta props
                 updateNewPostText={store.updateNewPostText.bid(store)}/>
        </BrowserRouter>,document.getElementById('root')
    )
)

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
