"use client"

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";


interface MobileSidebarProps {
    apiLimitCount: number;
}
export const MobileSidebar = ({
    apiLimitCount
}: MobileSidebarProps) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])

    return (
        <Sheet>
            <SheetTrigger>
                <div className="md:hidden">
                    <Menu />
                </div>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar apiLimitCount={apiLimitCount} />
            </SheetContent>
        </Sheet>
    )
}