import { UserState } from "../../objects/states";

export const getUserToken = (state: UserState) => {
    return state?.token;
}