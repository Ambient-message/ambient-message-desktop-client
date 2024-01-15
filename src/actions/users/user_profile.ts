import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios_instance.ts";

export const userProfileAsync = createAsyncThunk("user/profile",
    async (token: string) => {

        const response = await axiosInstance.post("/user/profile", {}, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });
        localStorage.setItem("user_info", JSON.stringify(response.data));

        return response.data;
    });