import { ActionReducerMapBuilder, PayloadAction, createReducer } from "@reduxjs/toolkit";
import { NavigationState, Pages } from "../../objects/states";
import update from "immutability-helper"
import { setActivePage } from "../../commands/navigation/navigation";

const defaultState : NavigationState = {
    currentPage: Pages.Login
}

const setCurrentPage = (state : NavigationState, action: PayloadAction<Pages>) => {
    
    if(action?.payload){
        return state;
    }

    return update(state, {
        currentPage : {
            $set: action.payload,
        },
    });
}


const reducerBuilder = (builder : ActionReducerMapBuilder<NavigationState>) => {
    builder.addCase(setActivePage.type, setCurrentPage);
};


export default createReducer(defaultState, reducerBuilder)