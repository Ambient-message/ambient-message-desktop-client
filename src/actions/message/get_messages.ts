import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios_instance.ts";
import {GetMessagePayLoad} from "./get_message_pay_load.ts";

export const getMessagesAsync = createAsyncThunk("message/get",
    async (chatPayload: GetMessagePayLoad) => {
        const response = await axiosInstance.post("/message/get",
                chatPayload.chat_id,
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