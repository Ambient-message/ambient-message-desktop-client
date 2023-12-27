import { createSelector } from "@reduxjs/toolkit";
import { NavigationState, State } from "../../objects/states"



const getNavigationState = (state: State) => {
    return state.navigation;
}

const currentPage = (state : NavigationState) => {
    return state.currentPage;
}


export const getCurrentPage = createSelector(
    getNavigationState,
    currentPage
)