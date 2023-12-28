import Button from "../../components/ui/button";
import { Paperclip, SendHorizonal } from "lucide-react";

export const Chat: React.FC = () => {

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
                <Button variant="ghost" className="w-15 h-15 ml-1 mr-2">
                    <Paperclip className="w-5 h-5"></Paperclip>
                </Button>
                <input
                    type='text'
                    placeholder='Type your message...'
                    className='flex-1 resize-y align-bottom h-11 px-5 rounded-lg bg-gray-200 border focus:outline-none'
                />
                <Button variant="ghost" className="ml-2 w-15 h-15 ">
                    <SendHorizonal className="w-5 h-5"></SendHorizonal>
                </Button>
            </div>

        </div>
    );
};
