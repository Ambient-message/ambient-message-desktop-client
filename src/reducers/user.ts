import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserState} from "../states/user_state";
import {loginUserAsync} from "../actions/users/user_authentication";
import {User} from "../entities/user.ts";
import {getAllUsersAsync} from "../actions/users/all_users.ts";
import {userProfileAsync} from "../actions/users/user_profile.ts";

const initialState: UserState = {
    id: null,
    token: null,
    users: [],
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
                userProfileAsync.fulfilled,
                (state, action: PayloadAction<UserState>) => {
                    state.username = action.payload.username
                }
            )
            .addCase(
                getAllUsersAsync.fulfilled,
                (state, action: PayloadAction<User[]>) => {
                    state.users = action.payload.filter(user => user.id !== state.id);
                }
            );
    },
});

export default userSlice.reducer;
