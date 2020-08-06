import React, {Component, Suspense} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';


import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route, withRouter} from "react-router-dom";




import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";

import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";


//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(()=> import('./components/Dialogs/DialogsContainer'));

//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(()=> import('./components/Profile/ProfileContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           // render={() => {
                           //     return <Suspense fallback={<Preloader/>}>
                           //         <ProfileContainer/>
                           //     </Suspense>
                           // }
                           // }
                           render={withSuspense(ProfileContainer)}
                    />
                    <Route path='/dialogs'
                           // render={() => {
                           //     return <Suspense fallback={<Preloader/>}>
                           //          <DialogsContainer/>
                           //     </Suspense>
                           // }
                           // }
                           render={withSuspense(DialogsContainer)}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
                {/*<Profile/>*/}
                {/*<Dialogs/>*/}
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);

const MainApp = (props) => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;