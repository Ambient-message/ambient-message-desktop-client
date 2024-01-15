import {Message} from "./message"

export class Chat {
    id: string
    messages: Message[]

    constructor(id: string, messages: Message[]) {
        this.id = id
        this.messages = messages
    }
}