import {PhoneVisibility} from "../enums/phoneVisibility"

export class User {

    id: string;
    name?: string;
    username: string;
    biography?: string
    phone?: string;
    phone_visibility?: PhoneVisibility;

    constructor(
        id: string,
        name: string,
        username: string,
        phone: string,
        phone_visibility: PhoneVisibility,
        biography?: string
    ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.biography = biography;
        this.phone = phone;
        this.phone_visibility = phone_visibility;
    }

}
