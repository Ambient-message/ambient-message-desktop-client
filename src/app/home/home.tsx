import Button from '../../components/ui/button';
import { LogOut, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { Chat } from '../chat/chat';
import { useState } from 'react';


export const Home: React.FC = () => {

    const [selectedChat, setSelectedChat] = useState<string | null>(null);

    const handleChatClick = (chatName: string) => {
        // Set the selected chat
        setSelectedChat(chatName);
    };


    const closeChat = () => {
        // Close the chat
        setSelectedChat(null);
    };

    const navigate = useNavigate();

    return (
        <div className='w-full flex h-screen'>

            <div className='hidden md:flex h-full w-full max-w-xs grow flex-col gap-y-5 mr-auto overflow-y-auto border-r border-gray-200 bg-white px-6'>

                <div className='flex items-center my-2'>
                    <Button
                        variant='ghost'
                        className='w-15 h-15'
                    >
                        <Menu className='w-5 h-5 m-auto' />
                    </Button>
                    <input
                        type='text'
                        placeholder='Search chats...'
                        className='m-2 w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:outline-none'
                    />
                </div>

                <div className='text-xs font-semibold leading-6 text-gray-400'>
                    Your chats
                </div>

                <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <nav className='flex flex-1 flex-col'>
                            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                                <li className='cursor-pointer'>
                                    <div className='flex items-center gap-x-4 px-6 py-3'>
                                        <div className='relative rounded-full h-10 w-10 bg-black'>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span aria-hidden='true'>Chat Name</span>
                                            <span className='text-xs text-zinc-500' aria-hidden='true'>
                                                Last message
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>

                        <li className='-mx-6 mt-auto flex items-center my-1'>
                            <div className='flex flex-1 items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900'>
                                <div className='relative rounded-3xl h-10 w-10 bg-black'>
                                </div>

                                <span className='sr-only'>Your profile</span>
                                <div className='flex flex-col'>
                                    <span aria-hidden='true'>Name</span>
                                    <span className='text-xs text-zinc-400' aria-hidden='true'>
                                        @username
                                    </span>
                                </div>
                            </div>

                            <Button variant='ghost' className='h-15 w-15 mx-5 aspect-square'>
                                <LogOut className='w-4 h-4' onClick={() => {
                                    navigate('/')
                                }} />
                            </Button>

                        </li>
                    </ul>
                </nav>
            </div>
            <Chat/>
        </div>
    )
}