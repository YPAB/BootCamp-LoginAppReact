import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';


export const LoginForm = ({ onSuccess }) => {

    const tipos = {
      perfil1:'Profesor',
      perfil2:'Alumno'
    }
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [tipo,setTipo] = useState(tipos.perfil1);
    const [error, setError] = useState('');
    const navigate =  useNavigate();


    function handleClick() {
      if (email === "test@test.com") {
        if (tipo === 'Profesor') {
          setError("");
  
          window.localStorage.setItem("isLogged", true);
          navigate('/welcome', {
            replace:true
          });
  
          //return;
        }
      }
  
      window.localStorage.setItem("isLogged", false);
      setError("Datos Incorrectos");
      }



    function onEmailChange(event) {
        setEmail(event.target.value);
        console.log(event.target.value);
      }
    
      function onPasswordChange(event) {
        setPassword(event.target.value);
        //console.log(event.target.value);
      }

      function onTipoChange(event) {
        setTipo(event.target.value);
        console.log(tipo);
      }


  return (
        <main className="LoginFormContainer">
            <h4 className="LoginFormTitle">Please fill in your unique admin login details below</h4>
            {error.length > 0 ? (
                <div className="LoginFormError">
                    {error}
                </div>
            )   : null}

                <label htmlFor="tipo" className="LoginFormInputLabel">Tipo</label>
                    < select
                        name="tipo" 
                        id="tipo"
                        onChange={e => setTipo(e.target.value)}
                        className="LoginFormInput" >
                         {Object.entries(tipos).map(c => (
                            <option key={c[0]} value={c[1]}>{c[1]}</option>
                          ))}
            
                    </select >
                

                <label htmlFor="email" className="LoginFormInputLabel">Email address</label>
                <input name="email" id="email" type="email" className="LoginFormInput" value={email} onChange={onEmailChange}/>
           
                <label htmlFor="password" className="LoginFormInputLabel">Password</label>
                <input name="password" id="password"  type="password" className="LoginFormInput" value={password} onChange={onPasswordChange} />
           
            <button className="LoginFormButton" onClick={handleClick}>
                <h4 className='LoginFormButtonH4'>Ingresar</h4>
            </button>

        </main>
  )
}
