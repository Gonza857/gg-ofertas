import TablaJuegosOfertaReventa from "@/components/page-components/reventa/TablaJuegosOfertaReventa";
import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import React, {Suspense} from "react";
import {cookies} from "next/headers";
import Recordatorios from "@/components/page-components/consumidores/juegos/ofertas/Recordatorios";
import BrandSpinner from "@/app/(modules)/admin/(components)/BrandSpinner";
import WrapperJuegosStock from "@/app/(pages)/(consumidores)/(components)/WrapperJuegosStock";
import GrillaOfertasReventa from "@/app/(pages)/reventa/(components)/GrillaOfertasReventa";
import InformacionJuegosOfertaReventa from "@/app/(pages)/reventa/(components)/InformacionJuegosOfertaReventa";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de ofertas para revendedores",
};

async function JuegosOfertaReventa() {
    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 lg:w-7/12 mx-auto px-2 pt-20"}>
            <Suspense fallback={
                <BrandSpinner/>
            }>
                <GrillaOfertasReventa/>
            </Suspense>
        </main>
    )
}


export default JuegosOfertaReventa