export class UserState {
    id : string | null;
    token : string | null;

    constructor(id : string | null, 
        token : string | null) {
        this.id = id;
        this.token = token;
    }
}