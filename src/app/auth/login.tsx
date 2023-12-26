import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from "../../components/ui/button";


export const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // const body = JSON.stringify({ username, password })

        navigate('/home')

        // fetch('http://127.0.0.1:8888/auth', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: body,
        // })
        //     .then(response => response.text())
        //     .then(data => {
        //         console.log('Server response:', data);
        //         navigate('/home')
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    };


    return (

        <section className="flex flex-col md:flex-row h-screen items-center">

            <div className="bg-white w-full  md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/3 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
              flex items-center justify-center">


                <div className="w-full h-100">

                    {/* <img
                    src="./src/assets/images/logo.png" 
                    alt="Logo"
                    className="w-15 h-15 m-auto mx-auto"
                    /> */}

                    {/* <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1> */}

                    <form className="mt-6" onSubmit={handleSubmit} action="#" method="POST">
                        <div>
                            <label className="block text-gray-700">Username</label>
                            <input value={username} onChange={handleUsernameChange} type="text" name="" id="" placeholder="Enter Username"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none"></input>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input value={password} onChange={handlePasswordChange}  type="password" name="" id="" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black
                      focus:bg-white focus:outline-none" required></input>
                        </div>

                        <Button isLoading={false} type="submit" className="w-full h-full block bg-black hover:bg-black text-white font-semibold rounded-lg
                    px-4 py-3 mt-6">Log In</Button>

                    </form>

                    <hr className="my-6 border-gray-300 w-full"></hr>

                    <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xlinkHref="http://www.w3.org/1999/xlink"
                                className="w-6 h-6"
                                viewBox="0 0 48 48"
                            >
                                <defs>
                                    <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                </defs>
                                <clipPath id="b">
                                    <use xlinkHref="#a" overflow="visible" />
                                </clipPath>
                                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                            </svg>
                            <span className="ml-4">Log in with Google</span>
                        </div>
                    </button>

                    <p className="mt-10">
                        Need an account?
                        <a href="#" className="text-black underline mx-1 font-semibold">
                            Create an account
                        </a>
                    </p>

                    <p className="text-sm text-gray-500 mt-12">&copy; 2023 Ambient - All Rights Reserved.</p>
                </div>

            </div>

        </section>
    )
};