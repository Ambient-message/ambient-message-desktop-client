import {createAsyncThunk} from "@reduxjs/toolkit";
import {OpenChatPayLoad} from "./open_chat_payload.ts";
import axiosInstance from "../../utils/axios_instance.ts";
import {Message} from "../../entities/message.ts";

export const openChatAsync = createAsyncThunk("chat/find",
    async (chatPayload: OpenChatPayLoad) => {
        const response = await axiosInstance.post<Message[]>("/chat/find",
            chatPayload.user_id,
            {
                headers: {
                    "Authorization": `Bearer ${chatPayload.user_token}`,
                    "Content-Type": 'application/json'
                }
            })
            .then(response => {
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })

        return response.data;
    }
)