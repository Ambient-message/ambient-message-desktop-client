import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserState} from "../states/user_state";
import {loginUserAsync} from "../actions/users/user_authentication";
import {userProfileAsync} from "../actions/users/user_profile.ts";
import {registUserAsync} from "../actions/users/user_registration.ts";

const initialState: UserState = {
    id: null,
    token: null,
    username: null,
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                loginUserAsync.fulfilled,
                (state, action: PayloadAction<UserState>) => {
                    state.id = action.payload.id;
                    state.token = action.payload.token;
                }
            )
            .addCase(
                registUserAsync.fulfilled,
                (state, action: PayloadAction<UserState>) => {
                    state.id = action.payload.id;
                    state.token = action.payload.token;
                }
            )
            .addCase(
                userProfileAsync.fulfilled,
                (state, action: PayloadAction<UserState>) => {
                    state.username = action.payload.username
                }
            )
    },
});

export default userSlice.reducer;
