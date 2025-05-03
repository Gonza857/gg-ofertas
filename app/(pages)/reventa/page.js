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
        <main className={"styledMain"}>
            <TablaJuegosOfertaReventa
                juegos={resultado.juegos}
                fechaExpiracion={resultado.termina}
                titulo={resultado.titulo}
            />
        </main>
    )
}


export default JuegosOfertaReventa