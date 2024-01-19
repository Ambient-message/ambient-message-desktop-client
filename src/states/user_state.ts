export class UserState {
    id: string | null;
    token: string | null;
    username: string | null;

    constructor(id: string | null,
                token: string | null,
                username: string | null,) {
        this.id = id;
        this.token = token;
        this.username = username;
    }
}