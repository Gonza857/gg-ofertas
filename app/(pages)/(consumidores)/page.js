import React from "react";
import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import TablaJuegosOfertaConsumidores from "@/components/page-components/consumidores/TablaJuegosOfertaConsumidores";
import AutoCarousel from "@/components/personalized-ui/AutoCarousel";
import {images} from "@/static-data/home.carrousel.images";
import BusinessFeatures from "@/components/personalized-ui/BusinessFeatures";
import BusinessHighlights from "@/components/personalized-ui/BusinessHighlights";
import PaymentMethods from "@/components/personalized-ui/PaymentMethods";
import MyCarousel from "@/components/personalized-ui/MyCarousel";
import {tarjetasPsn, tarjetasSteam} from "@/static-data/item.giftcards";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {obtenerTodasLasTarjetas} from "@/dominio/servicios/giftcards";
import {cookies} from "next/headers";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Tienda digital PlayStation Network",
};

async function Principal() {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerTodasLasTarjetas(undefined, token)
    if (!resultado.exito) return <>Error</>

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-10/12 mx-auto pt-20"}>
            <AutoCarousel images={images}/>
            <BusinessFeatures/>
            <GiftCardsSwiper
                titulo={"Tarjetas de regalo"}
                subtitulo={"¡Canjealas y comprá en tu cuenta!"}
                textoBoton={"Ver todas"}
                ruta={"/tarjetas-de-regalo"}
                productos={resultado.data}
            />
            <BusinessHighlights/>
            <PaymentMethods/>
        </main>
    )
}

function GiftCardsSwiper({productos, titulo, subtitulo, textoBoton, ruta}) {
    if (productos.length === 0) return;
    return (
        <div
            className={`w-full mx-auto flex 
            flex-col items-center justify-center rounded-xl px-2 md:px-8 py-4`}
        >
            <div className={"flex justify-between w-full pb-4"}>
                <div className={"flex flex-col gap-2"}>
                    <p className={'text-xl md:text-3xl font-bold'}>
                        {titulo}
                    </p>
                    <p className={"text-sm md:text-base"}>
                        {subtitulo}
                    </p>
                </div>
                <Link href={ruta} className={"w-fit"}>
                    <Button variant="outline">
                        {textoBoton}
                    </Button>
                </Link>
            </div>
            {/* MAP DE GIFTCARDS */}
            <MyCarousel productos={productos}/>
        </div>
    )
}

export default Principal;
