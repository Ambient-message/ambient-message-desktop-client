
export class AuthState {
    status: string | null;
    error : string | null;

    constructor(status : string | null,  error : string | null) {
        this.status  = status;
        this.error = error;
    }

}