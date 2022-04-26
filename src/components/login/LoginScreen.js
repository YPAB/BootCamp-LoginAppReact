import React from 'react';
import './AdminLogin.css';
import { LoginForm } from './LoginForm';

export const LoginScreen = () => {
  return (
    <main className="AdminLogin">
        <section className='AdminLoginTitle'>
            <h2 className="AdminLoginLabel">Stax Food Admin Login</h2>
        </section>
        
        <section className='LoginForm'>
            <LoginForm/>
        </section>
       
       
    </main>
  )
}
