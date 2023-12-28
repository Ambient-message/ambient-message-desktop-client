import { UserState } from "./user_state";

export class State {
    user_state : UserState;

    constructor(user_state : UserState) {
        this.user_state = user_state;
    }
}