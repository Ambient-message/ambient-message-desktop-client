
import userReducer from "../handlers/users/userAuthentication/userAuthenticationHandler"
import navReducer from "../handlers/navigation/navigation_handler"
import { configureStore } from "@reduxjs/toolkit"

const reducerMap = {
    User : userReducer,
    Navigation : navReducer,
}


export const store = configureStore({
    reducer : reducerMap
});