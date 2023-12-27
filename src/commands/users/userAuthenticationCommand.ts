import {createAsyncThunk} from '@reduxjs/toolkit'
import { IApiUser, IUserAuthenticationPayload } from '../../interfaces/index'
import { userAuthenticationRequest } from '../../requests/users/userAuthenticationRequest'
import { State } from '../../objects/states'
import { getAuthToken } from '../../selectors/users/get_auth_token'


export const userAuthenticationCommand = createAsyncThunk<IApiUser, IUserAuthenticationPayload, {state: State}>("user_authentication",
    async (payload : IUserAuthenticationPayload, {getState}) =>{
        return userAuthenticationRequest(payload, getAuthToken(getState())) as Promise<IApiUser>
    }
)


