import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";


//const App = () => {
//const App = function (){
//function App (){
function App (props){


  return (

      <div className = 'app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
              {/*<Route path='/dialogs' component={Dialogs}/>*/}
              {/*<Route path='/profile' component={Profile}/>*/}
              {/*<Route path='/news' component={News}/>*/}
              {/*<Route path='/music' component={Music}/>*/}
              {/*<Route path='/settings' component={Settings}/>*/}
              {/*to pass props:*/}
              <Route path='/dialogs'
                     render={ () => <Dialogs
                         // dialogs={props.state.dialogsPage.dialogs}
                         // messages={props.state.dialogsPage.messages}/> }/>
                          state={props.state.dialogsPage}/> }/>
              <Route path='/profile'
                     render={ () => <Profile
                          profilePage={props.state.profilePage}
                          // addPost={props.addPost}
                          // updateNewPostText={props.updateNewPostText}
                          dispatch={props.dispatch}
                     /> }/>
              <Route path='/news' render={ () => <News/> }/>
              <Route path='/music' render={ () => <Music/> }/>
              <Route path='/settings' render={ () => <Settings/> }/>
          </div>
          {/*<Profile/>*/}
          {/*<Dialogs/>*/}
      </div>

  );
}

export default App;
