"use client"

import { useProModel } from "@/hooks/use-pro-model"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Check, CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, VideoIcon, Zap } from "lucide-react";
import { Button } from "./ui/button";


const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-500"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-[#FFD700]"
    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        color: "text-orange-700"
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        color: "text-green-500"
    }
]

export const ProModal = () => { 
    const proModal = useProModel();

    return(
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex justify-center items-center gap-x-2 font-bold py-1">
                            Upgrade to Brinda
                            <Badge className=" flex justify-center uppercase text-sm py-1" variant={"premium"}>
                                Pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {routes.map((route)=> (
                            <Card
                                key={route.label}
                                className="p-3 border-black/5 flex items-center justify-between "
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("w-fit p-2 rounded-md ", route.color)}>
                                        <route.icon className={cn("w-6 h-6", route.color)} />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {route.label}
                                    </div>
                                </div>
                                <Check/>
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant={"premium"} className="w-full " size="lg">
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white"/>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}