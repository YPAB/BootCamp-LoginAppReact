import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { WelcomeScreen } from '../components/login/WelcomeScreen';

export const AppRoute = () => {
  return (
    
    <BrowserRouter >
      <Routes>
       
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/welcome*" element={<WelcomeScreen/>}/>

        <Route path="/" element={<LoginScreen/>}/>

      </Routes>
    </BrowserRouter>
  )
}
