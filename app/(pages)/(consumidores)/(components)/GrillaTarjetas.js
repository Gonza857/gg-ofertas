import GiftCard from "@/components/personalized-ui/item.giftcard";
import React from "react";
import {cookies} from "next/headers";
import {obtenerTodasLasTarjetas} from "@/dominio/servicios/giftcards";

async function GrillaTarjetas() {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerTodasLasTarjetas(undefined, token)
    if (!resultado.exito) return <>Error</>

    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 md:px-0">
            {resultado.data.map((giftCard, index) => (
                <GiftCard key={index} giftCard={giftCard}/>
            ))}
        </div>

    )
}

export default GrillaTarjetas;