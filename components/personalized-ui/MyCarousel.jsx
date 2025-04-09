"use client"

import React, {useEffect, useState} from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import {cn} from "@/lib/utils";
import GiftCard from "@/components/personalized-ui/item.giftcard";

const MyCarousel = ({productos = [], inicio, fin}) => {
    const [api, setApi] = useState(null);

    useEffect(() => {
        if (!api) return;

        const interval = setInterval(() => {
            api.scrollNext();
        }, 3000); // cada 3 segundos

        return () => clearInterval(interval);
    }, [api]);

    return (
        <div className={"relative w-full max-w-screen-xl mx-auto px-4"}>
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                    skipSnaps: false,
                    dragFree: true,
                }}
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {productos?.slice(inicio, fin).map((p, i) => (
                        <CarouselItem key={i} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <GiftCard giftCard={p} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 z-40",
                        "w-8 h-8 md:w-10 md:h-10",
                        "bg-blue-500 hover:bg-blue-900 text-white",
                        "border border-gray-200",
                        "rounded-full shadow-md",
                    )}
                />
                <CarouselNext
                    className={cn(
                        "absolute right-0 top-1/2 -translate-y-1/2 z-40",
                        "w-8 h-8 md:w-10 md:h-10",
                        "bg-blue-500 hover:bg-blue-900 text-white",
                        "border border-gray-200",
                        "rounded-full shadow-md",
                    )}
                />
            </Carousel>
        </div>
    )
}

export default MyCarousel;