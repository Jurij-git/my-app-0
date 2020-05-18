import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import state from './redux/state';
// import {addPost} from './redux/state';
// import {BrowserRouter, Route} from "react-router-dom";


//import state from './redux/state';
//import {addPost, updateNewPostText} from './redux/state';
import {BrowserRouter, Route} from "react-router-dom";
//import {subscribe} from './redux/state';



import store from './redux/state';

export let rerenderEntireTree = (store) =>(
    ReactDOM.render(
        <BrowserRouter>
            <App state={store._state}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}/>
        </BrowserRouter>,document.getElementById('root')
    )
)

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// addPost('fff');

// let rerenderEntireTree = () =>(
//
// //ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>,document.getElementById('root')
//     ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,document.getElementById('root')
//
//     )
// )


rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
