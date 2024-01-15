import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';
import {Home} from './app/home/home';
import store from './stores/store';
import {Login} from "./app/auth/login.tsx";

function App() {

    return (
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path='/' element={<Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    )
}

export default App
