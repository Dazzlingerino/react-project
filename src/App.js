import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.NavBarPage}/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs }/>*/}
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.DialogsPage}
                                                                  addMessage={props.addMessage}
                                                                  updateNewMessage={props.updateNewMessage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.ProfilePage} />}/>
                    <Route path='/news'/>
                    <Route path='/music'/>
                    <Route path='/settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
