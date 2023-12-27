import {createAsyncThunk} from '@reduxjs/toolkit'
import { IApiUser, IUserPayload } from '../../interfaces/index'


export const loginUserAsync = createAsyncThunk("Login_User",
    async (payload : IUserPayload) =>{
        return {} as IApiUser;
    }
)


