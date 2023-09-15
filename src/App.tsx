import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './CoffeeShopLoginPage/LoginPage';
import RegisterPage from './CoffeeShopRegisterPage/RegisterPage';
import Homepage from './CoffeeShopHomepage/MainHomepage/mainhomepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/CoffeeShopRegister' element={<RegisterPage />}></Route>
        <Route path='/Homepage' element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
