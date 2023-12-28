import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../states/user_state";
import { loginUserAsync } from "../actions/users/user_authentication";


const initialState: UserState = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") as string)
  : null;


const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        loginUserAsync.fulfilled,
        (state, action: PayloadAction<UserState>) => {
          state.id = action.payload.id;
          state.username = action.payload.username;
        }
      )
  }
});

export default userSlice.reducer;
