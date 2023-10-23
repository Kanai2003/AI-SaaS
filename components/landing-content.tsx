"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Testimonials = [
    {
        name: "Kanai",
        avatar: "K",
        title: "Computer Science Student",
        description: "I love Brinda AI. It's the best AI tool I've ever used."
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl font-bold text-white mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Testimonials.map((item)=>(
                    <Card key={item.description} className="border-none text-white bg-[#192339]">
                        <CardHeader >
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}