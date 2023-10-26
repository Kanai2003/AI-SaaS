import { UserButton } from "@clerk/nextjs"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { ModeToggle } from "@/components/theme-toggle"
import { getApiLimitCount } from "@/lib/api-limit"

export const Navbar = async () => {

    const apiLimitCount = await getApiLimitCount();
    return (
        <div className="flex items-center p-4">
            <MobileSidebar apiLimitCount={apiLimitCount} />
            <div className="flex w-full justify-end items-center gap-4 ">
                <ModeToggle/>
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}
