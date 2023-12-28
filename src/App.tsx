import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { Login } from './app/auth/login';
import React from 'react';
import { Home } from './app/home/home';
import store from './stores/store';
import ProtectedLayout from './ProtectedLayout';

function App() {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/' element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

export default App
