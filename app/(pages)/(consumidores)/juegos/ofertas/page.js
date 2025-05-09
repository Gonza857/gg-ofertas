import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import React from "react";
import TablaJuegosOfertaConsumidores from "@/components/page-components/consumidores/TablaJuegosOfertaConsumidores";
import {cookies} from "next/headers";

async function Ofertas() {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosOferta("customer", token)
    if (!resultado.exito) return <>Error</>

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-8/12 mx-auto"}>
            <TablaJuegosOfertaConsumidores
                juegos={resultado.data.juegos}
                fechaExpiracion={resultado.data.termina}
                titulo={resultado.data.titulo}
            />
        </main>
    )
}

export default Ofertas;