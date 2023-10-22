import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = () => {
    const user = useUser();

    const profileImageUrl = user?.user?.imageUrl;
    const firstName = user?.user?.firstName;
    const lastName = user?.user?.lastName;
    
    return (
        <Avatar className="w-8 h-8">
            <AvatarImage src={user?.user?.imageUrl} />
            <AvatarFallback>
                {user?.user?.firstName?.charAt(0)}
                {user?.user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    )
}

