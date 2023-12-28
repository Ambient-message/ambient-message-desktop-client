import Button from '../../components/ui/button';
import { CircleUserRound, FolderPlus, LogOut, Menu, Settings, UsersRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { Chat } from '../chat/chat';
import { useState } from 'react';

export const Home: React.FC = () => {

    const navigate = useNavigate();

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='w-full flex h-screen'>

            {isSidebarOpen && (
                <div className='flex flex-col border-gray-200 border-r bg-white w-20 sidebar'>
                    <table className='m-auto mt-5'>
                        <tbody>
                            <tr>
                                <td>
                                    <Button className='mt-0' variant="ghost">
                                        <Settings className='w-5 h-5' />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            <div className='hidden md:flex flex-grow h-full w-full max-w-xs flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white '>

                <div className='flex items-center my-2 ml-2'>
                    <Button
                        variant='ghost'
                        onClick={toggleSidebar}
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

                <div>
                    <div className='text-xs font-semibold ml-5 mb-5 text-gray-400'>
                        Your chats
                    </div>

                    <nav className='flex flex-1 flex-col'>
                        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                            <nav className='flex flex-1 flex-col'>
                                <ul role='list' className='flex flex-1 flex-col gap-y-7 hover:*:bg-gray-200'>
                                    <li className='cursor-pointer'>
                                        <div className='flex items-center gap-x-4 py-3 '>
                                            <div className='relative rounded-full h-10 w-10 ml-5 bg-black'>
                                            </div>
                                            <div className='flex flex-col '>
                                                <span aria-hidden='true'>Chat Name</span>
                                                <span className='text-xs text-zinc-500' aria-hidden='true'>
                                                    Last message
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>

                        </ul>
                    </nav>
                </div>
                <nav className='mt-auto mb-3'>
                    <li className='flex items'>
                        <div className='flex flex-1 gap-x-4 text-sm font-semibold leading-6 text-gray-900'>
                            <div className='relative rounded-3xl h-10 w-10 ml-5 bg-black'></div>

                            <span className='sr-only'>Your profile</span>
                            <div className='flex flex-col'>
                                <span aria-hidden='true'>Test</span>
                                <span className='text-xs text-zinc-400' aria-hidden='true'>Test</span>
                            </div>
                        </div>

                        <Button variant='ghost' className='h-15 w-15 mx-5 aspect-square'>
                            <LogOut className='w-4 h-4' onClick={() => {
                                localStorage.setItem("userInfo", "");
                                navigate('/')
                            }} />
                        </Button>
                    </li>
                </nav>
            </div>
            <Chat />
        </div>


    )
}