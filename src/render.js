import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, updateNewMessage} from "./redux/state";

export let reRenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


