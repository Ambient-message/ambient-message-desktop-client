import Button from '../../components/ui/Button';
import { CircleUserRound, FolderPlus, LogOut, Menu, Settings, UsersRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { Chat } from '../chat/chat';
import { useState } from 'react';
import { SidebarChatList } from '../../components/SidebarChatList';
import { User } from '../../entities/user';
import { useAppSelector } from '../../hooks/redux-hooks';
import { v4 as uuidv4 } from 'uuid';

export const Home: React.FC = () => {

    const navigate = useNavigate();

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const users: User[] = [
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
                        type='search'
                        placeholder='Search chats...'
                        className='m-2 w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:outline-none'
                    />
                </div>

                <div className='text-xs font-semibold ml-5 text-gray-400'>
                    Your chats
                </div>

                <SidebarChatList users={users} />
            </div>
            <Chat />
        </div>


    )
}