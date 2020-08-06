import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';
import * as serviceWorker from './serviceWorker';

//import state from './redux/state';
// import {addPost} from './redux/state';
// import {BrowserRouter, Route} from "react-router-dom";


//import state from './redux/state';
//import {addPost, updateNewPostText} from './redux/state';
import {BrowserRouter, Route} from "react-router-dom";
//import {subscribe} from './redux/state';

//import store from './redux/store';
import store from './redux/reduxStore';
import {Provider} from "react-redux";


// export let rerenderEntireTree = () =>(
//     //debugger
//     ReactDOM.render(
//         <BrowserRouter>
//             {/*<StoreContext.Provider value={store}>*/}
//             {/*    <App //state={state}     //ved on uze prishiol . toze samoje*/}
//             {/*        // addPost={store.addPost.bind(store)}    //bind tak kak tam netu this, tam call ot ojekta props*/}
//             {/*        // updateNewPostText={store.updateNewPostText.bind(store)}*/}
//             {/*         //dispatch={store.dispatch.bind(store)}   //bind tak kak tam netu this, tam call ot ojekta props*/}
//             {/*         //store={store}*/}
//             {/*    />*/}
//             {/*</StoreContext.Provider>*/}
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </BrowserRouter>,document.getElementById('root')
//     )
// )
//
// rerenderEntireTree();
// store.subscribe(()=>{
//     //let state = store.getState();
//     rerenderEntireTree();
// });


ReactDOM.render(

            <MainApp/>
        ,document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
