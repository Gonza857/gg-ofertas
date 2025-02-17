import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import React from "react";
import {BsPlaystation} from "react-icons/bs";
import {SiSteam} from "react-icons/si";
import TablaTarjetasRegaloReventa from "@/components/page-components/reventa/TablaTarjetasRegaloReventa";

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
    },
    {
        nombre: "Steam Gift Card 10 USD",
        region: "ARG",
        precioCliente: 15000,
        precioReventa: 14000,
    },
    {
        nombre: "Steam Gift Card 25 USD",
        region: "ARG",
        precioCliente: 37500,
        precioReventa: 35000,
    },
    {
        nombre: "Steam Gift Card 50 USD",
        region: "ARG",
        precioCliente: 75000,
        precioReventa: 70000,
    },
    {
        nombre: "Steam Gift Card 60 USD",
        region: "ARG",
        precioCliente: 90000,
        precioReventa: 84000,
    },
    {
        nombre: "Steam Gift Card 70 USD",
        region: "ARG",
        precioCliente: 105000,
        precioReventa: 98000,
    },
    {
        nombre: "Steam Gift Card 75 USD",
        region: "ARG",
        precioCliente: 112500,
        precioReventa: 105000,
    },
    {
        nombre: "Steam Gift Card 100 USD",
        region: "ARG",
        precioCliente: 150000,
        precioReventa: 140000,
    }
];

async function TarjetasDeRegaloReventa () {
    const tarjetas = [...tarjetasHard]

    return (
        <main className={"styledMain px-2 pb-4"}>
            <h1 className={"text-2xl font-semibold text-center py-4 font-sans"}>Tarjetas de regalo</h1>
            <article className={"w-full sm:w-11/12 md:w-3/4 xl:w-1/2 mx-auto p-2 md:p-0"}>
                <TablaTarjetasRegaloReventa tarjetas={tarjetas}/>
            </article>
        </main>
    )
}


export default TarjetasDeRegaloReventa