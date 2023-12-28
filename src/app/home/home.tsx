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
                                        <Settings className='w-6 h-6' />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            <div className='hidden md:flex flex-grow h-full w-full max-w-xs flex-col gap-y-5 mr-auto overflow-y-auto border-r border-gray-200 bg-white px-6'>

                <div className='flex items-center my-2'>
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


                <div className='text-xs font-semibold leading-5 text-gray-400'>
                    Archived Chats
                </div>
                <div>
                    <nav className='flex flex-1 flex-col'>
                        <ul role='list' className='flex flex-1 flex-col gap-y-7 hover:*:bg-gray-200'>
                            <li className='cursor-pointer'>
                                <div className='flex items-center gap-x-4 py-3'>
                                    <div className='relative rounded-full h-10 w-10 bg-black'>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span aria-hidden='true'>Archived Chats</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='text-xs font-semibold leading-6 text-gray-400'>
                    Your chats
                </div>

                <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                        <nav className='flex flex-1 flex-col'>
                            <ul role='list' className='flex flex-1 flex-col gap-y-7 hover:*:bg-gray-200'>
                                <li className='cursor-pointer'>
                                    <div className='flex items-center gap-x-4 py-3 '>
                                        <div className='relative rounded-full h-10 w-10 bg-black'>
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

                        <nav>
                            <li className='-mx-6 mt-auto flex items-center my-1'>
                                <div className='flex flex-1 items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900'>
                                    <div className='relative rounded-3xl h-10 w-10 bg-black'>
                                    </div>

                                    <span className='sr-only'>Your profile</span>
                                    <div className='flex flex-col'>
                                        <span aria-hidden='true'>Test</span>
                                        <span className='text-xs text-zinc-400' aria-hidden='true'>
                                            Test
                                        </span>
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
                    </ul>
                </nav>
            </div>
            <Chat />
        </div>


    )
}