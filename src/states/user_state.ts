import {User} from "../entities/user.ts";

export class UserState {
    id: string | null;
    token: string | null;
    users: User[] | null;

    constructor(id: string | null,
                token: string | null,
                users: User[] | null) {
        this.id = id;
        this.token = token;
        this.users = users;
    }
}