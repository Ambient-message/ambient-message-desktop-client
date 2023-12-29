import Button from '../../components/ui/Button';
import { CircleUserRound, FolderPlus, LogOut, Menu, Settings, UsersRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { Chat } from '../chat/chat';
import { useState } from 'react';
import { SidebarChatList } from '../../components/SidebarChatList';
import { User } from '../../entities/user';
import { useAppSelector } from '../../hooks/redux-hooks';
import { v4 as uuidv4 } from 'uuid';
import SignOutButton from '../../components/SignOutButton';

export const Home: React.FC = () => {

    const navigate = useNavigate();

    const user = useAppSelector((state) => state.user);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const users: User[] = [
        { id: uuidv4().toString(), username: 'John Doe', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'Alex Toi', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'Vlad', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'James', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'John Doe', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'Alex Toi', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'Vlad', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'James', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'John Doe', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'Alex Toi', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'Vlad', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'James', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'John Doe', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'Alex Toi', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'Vlad', password: 'qwefsdf' },
        { id: uuidv4().toString(), username: 'James', password: 'qwefsdf' },
    ];


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

            <div className='hidden md:flex flex-grow h-full w-full max-w-xs flex-col gap-y-5 border-r border-gray-200 bg-white '>

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

                <div className='overflow-y-auto '>
                    <div className='text-xs font-semibold ml-5 text-gray-400'>
                        Your chats
                    </div>

                    <SidebarChatList users={users} />
                </div>

                <div className='flex mt-auto mb-5'>
                    <div className='flex flex-1 gap-x-4 text-sm font-semibold leading-6 text-gray-900'>

                        <div className='flex flex-col ml-10'>
                            <span aria-hidden='true'>{user.id}</span>
                            <span className='text-xs text-zinc-400' aria-hidden='true'>{user.token}</span>
                        </div>
                    </div>

                    <SignOutButton className='mr-5'/>
                </div>
            </div>
        </div>


    )
}