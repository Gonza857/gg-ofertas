import TablaTarjetasRegaloAdmin from "@/components/page-components/admin/TablaTarjetasRegaloAdmin";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {PhoneIcon as WhatsappIcon} from "lucide-react"
import {FaWhatsapp} from "react-icons/fa";
import Link from "next/link";
import React from "react";

const tarjetasHard = [
    {
        nombre: "PlayStation Gift Card 10 USD",
        region: "USA",
        precioCliente: 13000,
        precioReventa: 12000,
        imagen: "/images/psncard/psn10.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 25 USD",
        region: "USA",
        precioCliente: 32500,
        precioReventa: 30000,
        imagen: "/images/psncard/psn25.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 50 USD",
        region: "USA",
        precioCliente: 65000,
        precioReventa: 60000,
        imagen: "/images/psncard/psn50.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 60 USD",
        region: "USA",
        precioCliente: 78000,
        precioReventa: 72000,
        imagen: "/images/psncard/psn60.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 75 USD",
        region: "USA",
        precioCliente: 97500,
        precioReventa: 90000,
        imagen: "/images/psncard/psn75.jpeg"
    },
    {
        nombre: "PlayStation Gift Card 100 USD",
        region: "USA",
        precioCliente: 130000,
        precioReventa: 120000,
        imagen: "/images/psncard/psn100.jpeg"
    }
];

const tarjetasSteam = [
    {
        nombre: "Steam Gift Card 10 USD",
        region: "USA",
        precioCliente: 15000,
        precioReventa: 14000,
    },
    {
        nombre: "Steam Gift Card 25 USD",
        region: "USA",
        precioCliente: 37500,
        precioReventa: 35000,
    },
    {
        nombre: "Steam Gift Card 50 USD",
        region: "USA",
        precioCliente: 75000,
        precioReventa: 70000,
    },
    {
        nombre: "Steam Gift Card 60 USD",
        region: "USA",
        precioCliente: 90000,
        precioReventa: 84000,
    },
    {
        nombre: "Steam Gift Card 70 USD",
        region: "USA",
        precioCliente: 105000,
        precioReventa: 98000,
    },
    {
        nombre: "Steam Gift Card 75 USD",
        region: "USA",
        precioCliente: 112500,
        precioReventa: 105000,
    },
    {
        nombre: "Steam Gift Card 100 USD",
        region: "USA",
        precioCliente: 150000,
        precioReventa: 140000,
    }
];

const obtenerTarjetasDeRegalo = (plataforma) => {
    return plataforma === "playstation" ? tarjetasHard : tarjetasSteam
}

const diccionarioPlataforma = {
    "playstation": "Tarjetas de regalo PlayStation Network (PSN)",
    "steam": "Tarjetas de regalo Steam"
}

const obtenerTituloSegunPlataforma = (plataforma) => diccionarioPlataforma[plataforma] ?? "Tarjetas de regalo"

async function TarjetasDeRegalo({params}) {
    const tarjetas = obtenerTarjetasDeRegalo(params.plataforma)
    return (
        <>
            <main className="styledMain py-4">
                <h2 className={"text-2xl font-bold mb-2 text-center"}>{obtenerTituloSegunPlataforma(params.plataforma)}</h2>
                <article className={"w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-4"}>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 md:px-0">
                        {/*<TablaTarjetasRegaloAdmin tarjetas={tarjetasHard}/>*/}
                        {tarjetas.map((giftCard, index) => (
                            <GiftCardItem key={index} giftCard={giftCard}/>
                        ))}
                    </div>
                </article>
            </main>
        </>
    )
}

const GiftCardItem = ({giftCard}) => {
    const mensaje = `Me interesa ${giftCard.nombre} ${giftCard.region} - $${giftCard.precioCliente.toLocaleString("es-AR")}.`
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="flex-grow p-4">
                <div className="aspect-square relative mb-2">
                    <Image
                        src={giftCard.imagen ?? "/images/steam/steam.jpeg"}
                        alt={giftCard.nombre}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"/>
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-lg">{giftCard.nombre}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Región: {giftCard.region}</p>
                <p className="text-lg sm:text-xl font-bold">${giftCard.precioCliente.toLocaleString()}</p>
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

export default TarjetasDeRegalo