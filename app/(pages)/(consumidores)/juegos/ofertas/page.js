import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import React from "react";
import TablaJuegosOfertaConsumidores from "@/components/page-components/consumidores/TablaJuegosOfertaConsumidores";

async function Ofertas() {
    const resultado = await obtenerJuegosOferta()
    if (!resultado.exito) return <>Error</>

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-8/12 mx-auto"}>
            <TablaJuegosOfertaConsumidores
                juegos={resultado.juegos}
                fechaExpiracion={resultado.termina}
                titulo={resultado.titulo}
            />
        </main>
    )
}

export default Ofertas;