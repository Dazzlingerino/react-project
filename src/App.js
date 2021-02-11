import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path='/dialogs' component={Dialogs }/>*/}
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news'/>
                <Route path='/music'/>
                <Route path='/settings'/>
            </div>
        </div>
    );
}

export default App;
