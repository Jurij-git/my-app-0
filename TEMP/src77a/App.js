import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';

import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";



const App = () => {


  return (

      <div className = 'app-wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='app-wrapper-content'>
              <Route path='/profile/:userId?'
                     render={ () => <ProfileContainer/>
                     }/>
              <Route path='/dialogs'
                     render={ () => <DialogsContainer
                         //store={props.store}//all store
                        />
                     }/>
              <Route path='/news' render={ () => <News/> }/>
              <Route path='/music' render={ () => <Music/> }/>
              <Route path='/settings' render={ () => <Settings/> }/>
              <Route path='/users' render={ () => <UsersContainer/> }/>
              <Route path='/login' render={ () => <LoginPage/> }/>
          </div>
          {/*<Profile/>*/}
          {/*<Dialogs/>*/}
      </div>

  );
}

export default App;
