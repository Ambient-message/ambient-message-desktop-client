import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios_instance";
import { UserAuthenticationPayload } from "./user_authentication_payload";


export const loginUserAsync = createAsyncThunk("auth",
  async (user: UserAuthenticationPayload) => {

    const response = await axiosInstance.post("/auth", user);
    localStorage.setItem("user_info", JSON.stringify(response.data));

    return response.data;
});
