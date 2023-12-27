
import userReducer from "../handles/user_login_handle"
import navReducer from "../handles/navigation_handle"
import { configureStore } from "@reduxjs/toolkit"

const reducerMap = {
    User : userReducer,
    Navigation : navReducer,
}


export const store = configureStore({
    reducer : reducerMap
});