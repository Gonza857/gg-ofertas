import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import React from "react";
import TablaJuegosOfertaConsumidores from "@/components/page-components/consumidores/TablaJuegosOfertaConsumidores";

async function Ofertas () {
    const {juegos, termina, titulo} = await obtenerJuegosOferta()

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-8/12 mx-auto"}>
            <TablaJuegosOfertaConsumidores juegos={juegos} fechaExpiracion={termina} titulo={titulo}/>
        </main>
    )
}

export default Ofertas;