import { ActionReducerMapBuilder, PayloadAction, createReducer } from "@reduxjs/toolkit";
import { UserState } from "../../../objects/states";
import { IApiUser } from "../../../interfaces";
import update from "immutability-helper"
import { userAuthenticationCommand } from "../../../commands/users/userAuthenticationCommand";

const defaultState : UserState = {
    token: "",
    currentUser: undefined
}

const userAuthenticationHandler = (state : UserState, action: PayloadAction<IApiUser>) => {
    
    if(!action?.payload){
        return state;
    }

    const {user: {username, password}, token} = action?.payload;

    const newUser = {
        username,
        password
    }

    state.currentUser = newUser;
    state.token = token;

    // return update(state, {
    //     currentUser : {
    //         $set: newUser,
    //     },
    //     token : {
    //         $set : token,
    //     },
    // });
}


const reducerBuilder = (builder : ActionReducerMapBuilder<UserState>) => {
    builder.addCase(userAuthenticationCommand.fulfilled.type, userAuthenticationHandler);
};


export default createReducer(defaultState, reducerBuilder)