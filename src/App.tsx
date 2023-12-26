import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import {Login} from './app/auth/login';
import React from 'react';
import { Home } from './app/home/home';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
