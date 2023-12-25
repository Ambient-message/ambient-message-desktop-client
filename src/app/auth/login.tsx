// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/button';

export const Login: React.FC = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const navigate = useNavigate();

    // const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setUsername(event.target.value);
    // };

    // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(event.target.value);
    // };

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();

    //     const body = JSON.stringify({ username, password })

    //     fetch('http://127.0.0.1:8888/auth', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: body,
    //     })
    //         .then(response => response.text())
    //         .then(data => {
    //             console.log('Server response:', data);
    //             navigate('/home')
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // };


    return (
       <Button isLoading={true} 
       type='button' 
       className='max-w-sm mx-auto w-full from-neutral-950' >hello</Button>
    )
};