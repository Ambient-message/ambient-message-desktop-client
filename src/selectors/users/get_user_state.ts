import { createSelector } from "@reduxjs/toolkit";
import { State, UserState } from "../../objects/states";

export const getUserState = (state: State) => {
    return state?.userState;
}

