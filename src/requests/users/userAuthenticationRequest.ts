import { IUserAuthenticationPayload } from "../../interfaces";
import { Request, RequestType } from "../request";

export const userAuthenticationRequest = (payload: IUserAuthenticationPayload, token: string) => {
    return Request("auth", token, RequestType.POST, undefined, payload)
}

