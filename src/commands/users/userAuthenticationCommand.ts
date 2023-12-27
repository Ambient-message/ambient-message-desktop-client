import {createAsyncThunk} from '@reduxjs/toolkit'
import { IUserAuthenticationPayload } from '../../interfaces/index'
import { userAuthenticationRequest } from '../../requests/users/userAuthenticationRequest'


export const userAuthenticationCommand = createAsyncThunk("user_authentication",
    async (payload : IUserAuthenticationPayload) =>{
        return userAuthenticationRequest(payload)
    }
)


