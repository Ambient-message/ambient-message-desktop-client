export class Message {
    id: string
    sender_id: string
    chat_id: string
    text: string

    constructor(
        id: string,
        sender_id: string,
        chat_id: string,
        text: string,
    ) {
        this.id = id
        this.sender_id = sender_id
        this.chat_id = chat_id
        this.text = text
    }
}