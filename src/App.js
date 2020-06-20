import React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>

            <div className="app-wrapper-content">
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>

            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
