import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserState} from "../states/user_state";
import {loginUserAsync} from "../actions/users/user_authentication";
import {User} from "../entities/user.ts";
import {getAllUsersAsync} from "../actions/users/all_users.ts";

const initialState: UserState = {
    id: null,
    token: null,
    users: [],
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
                getAllUsersAsync.fulfilled,
                (state, action: PayloadAction<User[]>) => {
                    state.users = action.payload;
                }
            );
    },
});

export default userSlice.reducer;
