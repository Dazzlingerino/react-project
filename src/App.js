import React from 'react';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar store={props.store}/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs }/>*/}
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />}/>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>

                    <Route path='/users' render={() => <UsersContainer store={props.store} />}/>

                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
