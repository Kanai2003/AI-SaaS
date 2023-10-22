import { AvatarImage } from "@radix-ui/react-avatar"
import { Avatar } from "./ui/avatar"

export const BotAvatar = () => {
    return (
        <Avatar className="w-8 h-8">
            <AvatarImage src="/logo.png" className="p-1" alt="Brinda" />
        </Avatar>
    )
}