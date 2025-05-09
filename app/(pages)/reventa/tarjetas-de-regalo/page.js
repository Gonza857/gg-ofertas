import TablaTarjetasRegaloReventa from "@/components/page-components/reventa/TablaTarjetasRegaloReventa";
import {obtenerTodasLasTarjetas} from "@/dominio/servicios/giftcards";
import React from "react";
import {cookies} from "next/headers";

async function TarjetasDeRegaloReventa () {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerTodasLasTarjetas("reseller", token)
    if (!resultado.exito) return <>Error</>

    return (
        <main className={"styledMain px-2 pt-20"}>
            <h1 className={"text-2xl font-semibold text-center py-4 font-sans"}>Tarjetas de regalo</h1>
            <article className={"w-full sm:w-11/12 md:w-3/4 xl:w-1/2 mx-auto p-2 md:p-0"}>
                <TablaTarjetasRegaloReventa tarjetas={resultado.data}/>
            </article>
        </main>
    )
}


export default TarjetasDeRegaloReventa