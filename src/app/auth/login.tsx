import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/ui/button";
import { IUserAuthenticationPayload } from '../../interfaces';
import { useDispatch } from 'react-redux';
import { userAuthenticationCommand } from '../../commands/users/userAuthenticationCommand';
import { AsyncDispatch } from '../../lib/redux';



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

    const dispatch : AsyncDispatch = useDispatch()
    
    const attemptLoginUser = (payload: IUserAuthenticationPayload) => 
    dispatch(userAuthenticationCommand(payload));

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        attemptLoginUser({username, password})
        navigate('/home')
    };

    return (

        <section className="flex flex-col md:flex-row h-full my-5 mt-5 items-center">

            <div className="bg-white w-full  md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/3 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
              flex items-center justify-center">


                <div className="w-full h-100">

                    <svg className='w-18 h-18 m-auto mx-auto' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="64" height="64" rx="32" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M29.6378 29.7539C28.9731 29.2954 28.2182 28.9403 27.3911 28.7189C23.5867 27.7009 19.6939 29.8978 18.6962 33.626C17.6986 37.3541 19.9738 41.2017 23.7782 42.2197C24.6051 42.441 25.4362 42.5104 26.2409 42.4452C24.5436 41.3609 23.8458 38.3692 24.6861 35.2291C25.5265 32.0887 27.6256 29.8452 29.6378 29.7539Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.0352 34.5509C29.5769 35.2154 29.2219 35.97 29.0006 36.7969C27.9826 40.6013 30.1796 44.4941 33.9077 45.4917C37.6359 46.4894 41.4834 44.2141 42.5015 40.4098C42.7228 39.5826 42.7922 38.7513 42.7269 37.9464C41.6429 39.6442 38.6508 40.3422 35.5104 39.5018C32.3703 38.6616 30.1269 36.5628 30.0352 34.5509Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.9615 29.7979C35.4196 29.1336 35.7744 28.3792 35.9956 27.5526C37.0137 23.7482 34.8167 19.8554 31.0885 18.8577C27.3604 17.8601 23.5128 20.1353 22.4948 23.9397C22.2734 24.7671 22.204 25.5987 22.2694 26.4037C23.353 24.7055 26.3455 24.0071 29.4864 24.8476C32.6261 25.6878 34.8693 27.7862 34.9615 29.7979Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.6161 33.8354C35.2806 34.2937 36.0352 34.6487 36.8621 34.87C40.6665 35.888 44.5592 33.691 45.5569 29.9629C46.5546 26.2347 44.2793 22.3872 40.475 21.3691C39.6478 21.1478 38.8165 21.0784 38.0116 21.1437C39.7094 22.2277 40.4074 25.2198 39.567 28.3602C38.7267 31.5003 36.628 33.7437 34.6161 33.8354Z" fill="white" />
                    </svg>

                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-10">Welcome back!</h1>
                        <h2 className="mt-2 font-medium">Login to your account</h2>
                    </div>

                    <form className="mt-6" onSubmit={handleSubmit} action="#" method="POST">
                        <div>
                            <label htmlFor='username_input' className="block text-gray-700">Username</label>
                            <input value={username} onChange={handleUsernameChange} type="text" name="" id="username_input" placeholder="Enter Username"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none"></input>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input value={password} onChange={handlePasswordChange} type="password" name="" id="" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black
                      focus:bg-white focus:outline-none" required></input>
                        </div>

                        <Button isLoading={false} type="submit" className="w-full h-full block bg-black hover:bg-black text-white font-semibold rounded-lg
                    px-4 py-3 mt-6">Log In</Button>

                    </form>

                    {/* <hr className="my-6 border-gray-300 w-full h-full"></hr> */}

                    {/* <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
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
                            <button className="ml-4">Log in with Google</button>
                        </div>
                    </button> */}

                    <div className="flex flex-col items-center justify-center">

                        <p className="mt-5">
                            Need an account?
                            <a href="#" className="text-black underline mx-1 font-semibold">
                                Create an account
                            </a>
                        </p>

                        <p className="text-sm text-gray-500 mt-8">&copy; 2023 Ambient - All Rights Reserved.</p>

                    </div>
                </div>

            </div>

        </section>
    )
};