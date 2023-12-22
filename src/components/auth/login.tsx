import React, { useState } from 'react';
import "./style.css";

export const Login: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Предотвращаем обычное поведение формы (перезагрузку страницы)
        event.preventDefault();
    

        const body = JSON.stringify({ username, password })

        console.log(body)

        fetch('http://127.0.0.1:8888/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        })
          .then(response => response.text())
          .then(data => {
            console.log('Server response:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };


    return (
        <div className='auth-container'>
            <form onSubmit={handleSubmit}>
                <div className='title'>
                    <img className="logo" alt="Logo" src="./src/assets/logo.png" />
                    <h2 className="welcome-back">Welcome Back!</h2>
                    <h4 className="login-to-your-account">Login to your account</h4>
                </div>

                <br>
                </br>
                <br>
                </br>

                <div className='input-field'>
                    <label htmlFor='username'>Enter Your Username</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange}></input>
                </div>

                <br>
                </br>

                <div className='input-field'>
                    <label htmlFor='password'>Enter Your Password</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange}></input>
                </div>

                <br>
                </br>

                <button id="login">Login</button>

                <br></br>
                <br></br>

                <p className="dont-have-an">
                    <span className="dont-have-an-account">Don’t have an account? </span>
                    <span className="register-now">Register Now!</span>
                </p>


            </form>
        </div>
    )
};