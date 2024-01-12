import { PhoneVisibility } from "../enums/phoneVisibility"

export class User {

    id: string;
    name?: string;
    username : string;
    password : string;
    biography?: string
    phone? : string;
    phone_visibility?: PhoneVisibility;
    
    constructor(
        id: string,
        name: string,
        username: string,
        password: string,
        phone: string,
        phone_visibility: PhoneVisibility,
        biography?: string
    ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.biography = biography;
        this.phone = phone;
        this.phone_visibility = phone_visibility;
    }

}
