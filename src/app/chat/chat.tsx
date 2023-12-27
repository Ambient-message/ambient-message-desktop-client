import Button from "../../components/ui/button";
import TextareaAutosize from 'react-textarea-autosize'
import { FC, useRef, useState } from 'react'

export const Chat: React.FC = () => {

    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [input, setInput] = useState<string>('')

    return (
        <div className='flex-1 justify-between flex flex-col h-full'>

            <div className='flex items-center justify-between py-3 border-b-2 border-gray-200'>
                <div className='flex flex-col leading-tight ml-5'>
                    <div className='flex items-center'>
                        <span className='text-gray-700 mr-3 font-bold'>
                            {"name"}
                        </span>
                    </div>
                    <span className='text-sm text-gray-600'>{"last seen 1 hour ago"}</span>
                </div>
            </div>

            <div className='flex-1 overflow-y-auto'>
            </div>

            <div className='flex justify-stretch items-center p-3 border-t-2 border-gray-200'>
                <input
                    type='text'
                    placeholder='Type your message...'
                    className='flex-1 align-bottom h-full px-5 rounded-sm bg-gray-200 border focus:outline-none'
                />
                <Button className="ml-2">Send</Button>
            </div>

        </div>
    );
};