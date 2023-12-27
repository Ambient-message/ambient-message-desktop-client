import { IUserAuthenticationPayload } from "../../interfaces";
import { Request } from "../request";

export const userAuthenticationRequest = (payload: IUserAuthenticationPayload) => {
    return Request("auth", "POST", undefined, payload)
}

