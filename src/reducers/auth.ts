import { createSlice } from "@reduxjs/toolkit";
import { loginUserAsync } from "../actions/users/user_authentication";
import { AuthState } from "../states/auth_state";

const initialState: AuthState = {
    status: null,
    error: null,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(
                loginUserAsync.fulfilled,
                (state) => {
                    state.status = "idle";
                }
            )
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Login failed";
            })
    },
});

export default authSlice.reducer;
