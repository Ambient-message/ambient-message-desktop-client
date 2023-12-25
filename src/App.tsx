import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import {Login} from './app/auth/login';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
