import Button from '../../components/ui/Button';
import {Menu, Settings} from 'lucide-react'
import React, {useEffect, useState} from 'react';
import {SidebarChatList} from '../../components/SidebarChatList';
import {User} from '../../entities/user';
import {useAppDispatch, useAppSelector} from '../../hooks/redux-hooks';
import SignOutButton from '../../components/SignOutButton';
import SidebarMenu from '../../components/SidebarMenu';
import {Chat} from "../chat/[userid]/chat.tsx";
import {openChatAsync} from "../../actions/chat/open_chat.ts";
import {EmptyChat} from "../chat/emptyChat.tsx";
import {getAllUsersAsync} from "../../actions/users/all_users.ts";
import {userProfileAsync} from "../../actions/users/user_profile.ts";


export const Home: React.FC = () => {
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.user);
    const fetchedUsers = useAppSelector((state) => state.user.users);
    //const sessionId = useAppSelector((state) => state.user.id);

    const [searchTerm, setSearchTerm] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [chatId, setChatId] = useState(null);
    const [users, setUsers] = useState<User[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getAllUsersAsync());
                await dispatch(userProfileAsync(user.token!));
            } catch (e) {
                console.error('Error fetching users:', e);
            }
        };

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        if (selectedUserId) {
            handleChatOpened();
        }
    }, [selectedUserId]);

    useEffect(() => {
        console.log('users:', fetchedUsers);
        setUsers(fetchedUsers!);
    }, [fetchedUsers]);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleChatSelection = (userId: string) => {
        setSelectedUserId(userId);
    };

    const handleChatOpened = async () => {
        try {
            const id = await dispatch(openChatAsync({user_token: user.token!, user_id: selectedUserId!})).unwrap();
            setChatId(id);
        } catch (e) {
            console.error('Something went wrong with opening the chat:', e);
        }
    };

    const menu = [
        <Button className='mt-0' variant="ghost">
            <Settings className='w-5 h-5'/>
        </Button>,
    ]

    return (
        <div className='w-full flex h-screen'>

            {isMenuOpen && (
                <div className='flex flex-col border-gray-200 border-r bg-white w-20 sidebar'>
                    <SidebarMenu buttons={menu}/>
                </div>
            )}

            <div
                className='hidden md:flex flex-grow h-full w-full max-w-xs flex-col gap-y-5 border-r border-gray-200 bg-white '>

                <div className='flex items-center my-2 ml-2'>
                    <Button
                        variant='ghost'
                        onClick={toggleMenu}
                        className='w-15 h-15'>
                        <Menu className='w-5 h-5 m-auto'/>
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

                    {users.length > 0 ? <SidebarChatList users={users} searchTerm={searchTerm}
                                     onChatSelect={handleChatSelection}/> : null}
                </div>

                <div className='flex mt-auto mb-5'>
                    <div className='flex flex-1 gap-x-4 text-sm font-semibold leading-6 text-gray-900'>

                        <div className='flex flex-col ml-10'>
                            <span aria-hidden='true'>{user.username}</span>
                            {/*<span className='text-xs text-zinc-400' aria-hidden='true'>{user.token}</span>*/}
                        </div>
                    </div>

                    <SignOutButton className='mr-5'/>
                </div>
            </div>

            {chatId ? <Chat chatId={chatId}/>
                : <EmptyChat userId={selectedUserId!} onChatCreate={handleChatOpened}/>}

        </div>


    )
}

