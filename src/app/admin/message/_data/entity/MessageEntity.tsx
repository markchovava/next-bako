export interface MessageInterface{
    id: string | number
    name: string
    email: string
    message: string
    title: string
    status: string,
    userId: string | number
    createdAt: string
    updatedAt: string
}


export const MessageEntity: MessageInterface = {
    id: "",
    name: "",
    email: "",
    title: "",
    status: "",
    userId: "",
    message: "",
    createdAt: "",
    updatedAt: ""
};