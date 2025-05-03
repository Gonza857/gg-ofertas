import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FaWhatsapp} from "react-icons/fa";
import React from "react";

function GiftCard ({giftCard}) {
    console.log(giftCard)
    const mensaje = `Me interesa ${giftCard.nombre} ${giftCard.region} - $${giftCard.precio.toLocaleString("es-AR")}.`
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="flex-grow p-4">
                <div className="aspect-square relative mb-2">
                    <Image
                        src={giftCard.imagenUrl}
                        alt={giftCard.nombre}
                        layout="fill"
                        objectFit="contain"
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="rounded-md"/>
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-lg">{giftCard.nombre}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Región: {giftCard.region}</p>
                <p className="text-lg sm:text-xl font-bold">${giftCard.precio.toLocaleString()}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Link
                    href={`https://wa.me/5491132001372?text=${mensaje}`}
                    className={"w-full"}
                    target={"_blank"}
                >
                    <Button className="w-full">
                        <FaWhatsapp/>
                        Me interesa
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default GiftCard;
