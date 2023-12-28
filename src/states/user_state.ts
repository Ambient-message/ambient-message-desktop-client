export class UserState {
    id : string | null;
    username : string | null;

    constructor(id : string | null, 
        username : string | null) {
        this.id = id;
        this.username = username;
    }

}