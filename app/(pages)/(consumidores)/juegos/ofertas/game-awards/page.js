import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import TablaJuegosOfertaConsumidores from "@/components/page-components/consumidores/TablaJuegosOfertaConsumidores";
import React from "react";
import Recordatorios from "@/components/page-components/consumidores/juegos/ofertas/Recordatorios";
import {cookies} from "next/headers";
import InformacionJuegosOferta from "@/app/(pages)/(consumidores)/(components)/InformacionJuegosOferta";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de ofertas",
};

async function OfertasFinDeSemana() {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosOferta("customer", token, false, 2)
    if (!resultado.exito) return <>Error</>

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 lg:w-7/12 mx-auto px-2 pt-20"}>
            <h2 className="mt-4 text-2xl font-bold mb-2 text-center">{resultado.data.titulo}</h2>
            <InformacionJuegosOferta fecha={resultado.data.termina}/>
            <TablaJuegosOfertaConsumidores
                juegos={resultado.data.juegos}
                fechaExpiracion={resultado.data.termina}
                titulo={resultado.data.titulo}
            />
        </main>
    )
}

export default OfertasFinDeSemana;