import TablaJuegosOfertaReventa from "@/components/page-components/reventa/TablaJuegosOfertaReventa";
import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import React from "react";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de ofertas para revendedores",
};

async function JuegosOfertaReventa() {
    const resultado = await obtenerJuegosOferta("reseller")
    if (!resultado.exito) return <>Error</>

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-8/12 mx-auto"}>
            <TablaJuegosOfertaReventa
                juegos={resultado.data.juegos}
                fechaExpiracion={resultado.data.termina}
                titulo={resultado.data.titulo}
            />
        </main>
    )
}


export default JuegosOfertaReventa