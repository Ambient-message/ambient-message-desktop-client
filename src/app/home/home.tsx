import React, { useState } from 'react';
import Button from '../../components/ui/button';
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full flex h-screen'>

            <div className='hidden md:flex h-full w-full max-w-xs grow flex-col gap-y-5 mr-auto overflow-y-auto border-r border-gray-200 bg-white px-6'>

                <div className='text-xs mt-10 font-semibold leading-6 text-gray-400'>
                    Your chats
                </div>

                <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <li>
                            //chats
                        </li>
                        <li className='-mx-6 mt-auto flex items-center'>
                            <div className='flex flex-1 items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900'>
                                <div className='relative rounded-3xl h-10 w-10 bg-black'>

                                </div>

                                <span className='sr-only'>Your profile</span>
                                <div className='flex flex-col'>
                                    <span aria-hidden='true'>Name</span>
                                    <span className='text-xs text-zinc-400' aria-hidden='true'>
                                        Email
                                    </span>
                                </div>
                            </div>

                            <Button variant='ghost' className='h-15 w-15 mx-5 aspect-square'>
                                <LogOut className='w-4 h-4' onClick={() => {
                                    navigate('/')
                                }}/>
                            </Button>

                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}