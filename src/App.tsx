import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './style/App.scss';
import {Header} from "./component";
import {AppRouter} from './router';

function App() {

    return (
        <BrowserRouter >
            <div className="App" >
                <Header/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
