import {Message} from "../entities/message.ts";
import React from "react";

export const MessageEl: React.FC<{ message: Message; currentUserSenderId: string }>
    = ({message, currentUserSenderId}) => {
    const isCurrentUserMessage = message.sender_id === currentUserSenderId;

    if (isCurrentUserMessage) {
    return (
        <div className={`flex justify-end`}>
            <div key={message.id}
                 className={`rounded-l-lg w-1/2 p-3 mb-2 bg-gray-50 }`}>
                <div>{message.text}</div>
            </div>
        </div>
    );
    } else {
        return (
            <div className={`flex justify-start`}>
                <div key={message.id}
                     className={`rounded-r-lg w-1/2 p-3 mb-2 bg-gray-50 }`}>
                    <div>{message.text}</div>
                </div>
            </div>

        );
    }
};
