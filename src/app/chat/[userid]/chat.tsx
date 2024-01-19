import React, {useEffect, useState} from "react";
import Button from "../../../components/ui/Button";
import {Paperclip, SendHorizonal, Smile} from "lucide-react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks.ts";
import {sendMessageAsync} from "../../../actions/message/send_message.ts";
import {getMessagesAsync} from "../../../actions/message/get_messages.ts";
import {Message} from "../../../entities/message.ts";
import {MessageEl} from "../../../components/Message.tsx";

interface ChatProps {
    chatId: string,
}

export const Chat: React.FC<ChatProps> = ({chatId}) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [inputText, setInputText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleMessageSend = async () => {
        try {
            if (inputText) {
                await dispatch(
                    sendMessageAsync(
                        {user_token: user.token!, chat_id: chatId, text: inputText})).unwrap();
                setInputText('');
            }
        } catch (e) {
            console.error('Something went wrong with opening the chat:', e);
        }
    };

    const [messages, setMessages] = useState<Message[]>([]);

    const fetchMessages = async () => {
        try {
            const response = await dispatch(
                getMessagesAsync({ user_token: user.token!, chat_id: chatId }));
            setMessages(response.payload);
        } catch (e) {
            console.error("Something went wrong with fetching messages:", e);
        }
    };

    useEffect(() => {
        fetchMessages();

        const intervalId = setInterval(() => {
            fetchMessages();
        }, 1000);

        return () => clearInterval(intervalId);
    }, [chatId]);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (

        <div className='flex-1 justify-between flex'>
            <div className='flex-1 justify-between flex flex-col w-full h-full'>

                <div className='flex items-center justify-between py-3 border-b-2 border-gray-200'>
                    <div className='flex flex-col leading-tight ml-5'>
                        <div className='flex items-center'>
                            <span className='text-gray-700 mr-3 font-bold'>
                                {chatId}
                            </span>
                        </div>
                        {/* <span className='text-sm text-gray-600'>{"last seen 1 hour ago"}</span> */}
                    </div>
                </div>

                <div className='flex-1 overflow-y-auto bg-gray-200 p-3'>
                    {messages.map((message) => (
                        <MessageEl key={message.id} message={message} currentUserSenderId={user.id!} />
                    ))}
                </div>

                <div className='flex justify-stretch items-center p-3 border-t-2 border-gray-200'>
                    <Button variant="ghost" className="w-15 h-15 ml-1 mr-2">
                        <Paperclip className="w-5 h-5"></Paperclip>
                    </Button>
                    <input
                        type='text'
                        placeholder='Type your message...'
                        className='flex-1 resize-y align-bottom h-11 px-5 rounded-lg bg-gray-200
                         border focus:outline-none'
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <Button variant="ghost"
                            onClick={toggleSidebar}
                            className="ml-2 w-15 h-15 ">
                        <Smile className="w-5 h-5"></Smile>
                    </Button>
                    <Button variant="ghost"
                            className="ml-2 w-15 h-15 "
                            onClick={handleMessageSend}>
                        <SendHorizonal className="w-5 h-5"></SendHorizonal>
                    </Button>
                </div>
            </div>

            {isSidebarOpen && (
                <div className='flex flex-col border-gray-200 border-r bg-white w-60 sidebar'>

                </div>
            )}
        </div>

    );
};
