import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios_instance.ts";
import {ApiUser} from "./api_user.ts";
import {User} from "../../entities/user.ts";

export const getAllUsersAsync = createAsyncThunk("user/get_all",
    async () => {
        const response =
            await axiosInstance.get<ApiUser[]>("/user/get_all",
                {})
                    console.log(response);
                    return response.data.map(apiUser => ({
                        id: apiUser.id,
                        username: apiUser.username,
                    })) as User[];
    });