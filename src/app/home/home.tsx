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
import SidebarMenu from '../../components/SidebarMenu';

const users: User[] = [
    { id: uuidv4().toString(), username: 'John Doe', password: 'qwefsdf' },
    { id: uuidv4().toString(), username: 'Alex Toi', password: 'qwefsdf' },
    { id: uuidv4().toString(), username: 'Vlad', password: 'qwefsdf' },
    { id: uuidv4().toString(), username: 'James', password: 'qwefsdf' },
    { id: uuidv4().toString(), username: 'John Doe', password: 'qwefsdf' },
];
export const Home: React.FC = () => {

    const user = useAppSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menu = [
        <Button className='mt-0' variant="ghost">
            <Settings className='w-5 h-5' />
        </Button>,
    ]

    return (
        <div className='w-full flex h-screen'>

            {isMenuOpen && (
                <div className='flex flex-col border-gray-200 border-r bg-white w-20 sidebar'>
                    <SidebarMenu buttons={menu} />
                </div>
            )}

            <div className='hidden md:flex flex-grow h-full w-full max-w-xs flex-col gap-y-5 border-r border-gray-200 bg-white '>

                <div className='flex items-center my-2 ml-2'>
                    <Button
                        variant='ghost'
                        onClick={toggleMenu}
                        className='w-15 h-15'>
                        <Menu className='w-5 h-5 m-auto' />
                    </Button>
                    <input
                        type='text'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search chats...'
                        className='m-2 w-full h-10 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:outline-none'
                    />
                </div>

                <div className='overflow-y-auto '>

                    <p className='text-xs mb-4 font-semibold ml-5 text-gray-400'>
                        Your chats
                    </p>

                    <SidebarChatList users={users} searchTerm={searchTerm} />
                </div>

                <div className='flex mt-auto mb-5'>
                    <div className='flex flex-1 gap-x-4 text-sm font-semibold leading-6 text-gray-900'>

                        <div className='flex flex-col ml-10'>
                            <span aria-hidden='true'>{user.id}</span>
                            <span className='text-xs text-zinc-400' aria-hidden='true'>{user.token}</span>
                        </div>
                    </div>

                    <SignOutButton className='mr-5' />
                </div>
            </div>
        </div>


    )
}

