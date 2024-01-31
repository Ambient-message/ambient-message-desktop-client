import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserAuthenticationPayload} from "./user_authentication_payload.ts";
import axiosInstance from "../../utils/axios_instance.ts";

export const registUserAsync = createAsyncThunk("user/reg",
    async (user: UserAuthenticationPayload) => {

        const response = await axiosInstance.post("/reg", {}, {
            auth: {
                username: user.username,
                password: user.password
            }
        });
        localStorage.setItem("user_info", JSON.stringify(response.data));

        return response.data;
    });