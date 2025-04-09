"use client"

import {useState, useEffect} from "react";
import {Card, CardContent} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import Image from "next/image";
import Link from "next/link";

function AutoCarousel({images}) {
    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [userInteracted, setUserInteracted] = useState(false)

    // Configurar el API del carousel
    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    // Autoplay functionality
    useEffect(() => {
        if (!api || !autoplay || userInteracted) return

        const interval = setInterval(() => {
            api.scrollNext()
        }, 3000) // Avanza cada 3 segundos

        return () => clearInterval(interval)
    }, [api, autoplay, userInteracted])

    // Reset user interaction after some time
    useEffect(() => {
        if (!userInteracted) return

        const timeout = setTimeout(() => {
            setUserInteracted(false)
        }, 5000) // Vuelve a autoplay después de 5 segundos de inactividad

        return () => clearTimeout(timeout)
    }, [userInteracted])

    const handleManualNavigation = () => {

        setUserInteracted(true)
    }

    return (
        <div className="w-full sm:w-11/12 max-w-3xl mx-auto px-4">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Link href={image.urlTo}>

                                <Card className="border-0 shadow-none">
                                    <CardContent
                                        className="flex aspect-video items-center justify-center p-6 bg-slate-100 rounded-xl">
                                        <Image
                                            src={image.path}
                                            width={1200}
                                            height={600}
                                            className="w-full h-full object-cover"
                                            alt={image.alt || `Slide ${index + 1}`}
                                            priority={index === 0}
                                        />
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>

                    ))}
                </CarouselContent>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1">
                        {Array.from({length: images.length}).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    api?.scrollTo(index)
                                    handleManualNavigation()
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    current === index + 1 ? "bg-slate-800 w-4" : "bg-slate-300"
                                }`}
                                aria-label={`Ir a slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <CarouselPrevious onClick={() => {
                            api.scrollPrev()
                            handleManualNavigation()
                        }} className="static transform-none"/>
                        <CarouselNext onClick={() => {
                            api.scrollNext()
                            handleManualNavigation()
                        }} className="static transform-none"/>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default AutoCarousel