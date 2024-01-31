import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios_instance.ts";
import {SendMessagePayLoad} from "./send_message_pay_load.ts";

export const sendMessageAsync = createAsyncThunk("message/send",
    async (chatPayload: SendMessagePayLoad) => {
        const response = await axiosInstance.post("/message/send",
            {chat_id: chatPayload.chat_id, text: chatPayload.text},
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