import React from 'react'
import './WelcomeScreen.css';

export const WelcomeScreen = ({email,tipo}) => {
  return (
    <>
    <div className="WelcomeScreen">
        <h2>Bienvenido - {tipo} - {email}</h2>

    </div>
    </>
  )
}
