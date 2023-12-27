import { createSelector } from "@reduxjs/toolkit";
import { State, UserState } from "../../objects/states";
import { getUserState } from "./get_user_state";

export const getUser = (state: UserState) => {
    return state?.currentUser;
}

export const getCurrentUser = createSelector(
    getUserState,
    getUser,
)

