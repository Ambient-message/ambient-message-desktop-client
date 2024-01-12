import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../states/user_state";
import { loginUserAsync } from "../actions/users/user_authentication";

const initialState: UserState = {
    id : null,
    token : null,
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
    },
});

export default userSlice.reducer;
