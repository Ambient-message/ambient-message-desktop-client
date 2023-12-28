import { FC, useState } from "react"
import { Message } from "../entities/message"
import { User } from "../entities/user"
import { usePathname, useRouter } from 'next/navigation'
import { chatHrefConstructor } from "../utils/chatHrefConstructor"


interface SidebarChatListProps {
    users: User[],
}

export const SidebarChatList: FC<SidebarChatListProps> = ({ users }) => {
    const [activeChats] = useState<User[]>(users)

    return (
        <ul role='list' className='flex flex-1 flex-col'>
            {activeChats.sort().map((user) => {
                return (
                    <li key={user.id}>
                        <div className='flex flex-1 flex-col'>
                            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                                <nav className='flex flex-1 flex-col'>
                                    <ul role='list' className='flex flex-1 flex-col gap-y-7 hover:*:bg-gray-200'>
                                        <li className='cursor-pointer'>
                                            <div className='flex items-center gap-x-4 py-3 '>
                                                <div className='relative rounded-full h-10 w-10 ml-5 bg-black'>
                                                </div>
                                                <div className='flex flex-col '>
                                                    <span aria-hidden='true'>{user.username}</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </ul>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
