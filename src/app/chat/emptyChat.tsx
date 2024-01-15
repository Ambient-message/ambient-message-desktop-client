import Button from "../../components/ui/Button.tsx";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks.ts";
import {createChatAsync} from "../../actions/chat/create_chat.ts";

interface EmptyChatProps {
    userId: string,
    onChatCreate: (chatId: string) => void
}

export const EmptyChat: React.FC<EmptyChatProps> = ({userId, onChatCreate})=> {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const createChat = async () => {
        try {
            const id = await dispatch(createChatAsync({user_token: user.token!, user_id: userId})).unwrap();
            onChatCreate(id)
        } catch (e) {
            console.error('Something went wrong with opening the chat:', e);
        }
    };

    return (
        <div className='flex-1 justify-center items-center flex'>
            <div className='flex-1 justify-center items-center flex flex-col w-full h-full'>
                <span className='text-2xl mb-4'>Чат еще не создан</span>
                <Button className='mt-4' onClick={createChat}>Создать чат</Button>
            </div>
        </div>
    );
};