export class Message {
    id: string
    senderId: string
    receiverId: string
    text: string
    timestamp: number

    constructor(
        id: string,
        senderId: string,
        receiverId: string,
        text: string,
        timestamp: number
    ) {
        this.id = id
        this.senderId = senderId
        this.receiverId = receiverId
        this.text = text
        this.timestamp = timestamp
    }
}