import { createSelector } from "@reduxjs/toolkit";
import { getUserState } from "./get_user_state";
import { getUserToken } from "./get_user_token";

export const getAuthToken = createSelector(
    getUserState, getUserToken
);

