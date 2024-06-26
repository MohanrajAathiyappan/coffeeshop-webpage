import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './CoffeeShopLoginPage/LoginPage';
import RegisterPage from './CoffeeShopRegisterPage/RegisterPage';
import Homepage from './CoffeeShopHomepage/MainHomepage/mainhomepage'
import ForgetPassword from './CoffeeShopForgetPassword/forgetPasswordPage'
import Profile from './CoffeeShopHomepage/CoffeeShop Profile/UserProfile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/CoffeeShopRegister' element={<RegisterPage />}></Route>
        <Route path='/CoffeeShopForgetPassword' element={<ForgetPassword />}></Route>
        <Route path='/Homepage' element={<Homepage />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
