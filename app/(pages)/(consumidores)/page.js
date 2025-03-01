import React from "react";
import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import TablaJuegosOfertaConsumidores from "@/components/page-components/consumidores/TablaJuegosOfertaConsumidores";

export const dynamic = "force-dynamic";

async function Ofertas() {
    const {juegos, termina, titulo} = await obtenerJuegosOferta()

    return (
        <main className={"styledMain"}>
            <TablaJuegosOfertaConsumidores juegos={juegos} fechaExpiracion={termina} titulo={titulo}/>
        </main>
    )
};

export default Ofertas;
