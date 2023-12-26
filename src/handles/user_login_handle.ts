import { ActionReducerMapBuilder, PayloadAction, createReducer } from "@reduxjs/toolkit";
import { UserState } from "../objects/states";
import { IApiUser } from "../interfaces";
import update from "immutability-helper"
import { loginUserAsync } from "../actions/users/login_user";

const defaultState : UserState = {
    token: "",
    currentUser: undefined
}

const handleUserLoginAsync = (state : UserState, action: PayloadAction<IApiUser>) => {
    
    if(action?.payload){
        return state;
    }

    const {user, token} = action.payload;

    return update(state, {
        currentUser : {
            $set: user,
        },
        token : {
            $set : token,
        },
    });
}


const reducerBuilder = (builder : ActionReducerMapBuilder<UserState>) => {
    builder.addCase(loginUserAsync.fulfilled, handleUserLoginAsync);
};


export default createReducer(defaultState, reducerBuilder)