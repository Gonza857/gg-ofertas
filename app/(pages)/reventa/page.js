import TablaJuegosOfertaReventa from "@/components/page-components/reventa/TablaJuegosOfertaReventa";
import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import {Suspense} from "react";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

async function JuegosOfertaReventa() {
    const {juegos, termina, titulo} = await obtenerJuegosOferta()

    return (
        <main className={"styledMain"}>
            <TablaJuegosOfertaReventa juegos={juegos} fechaExpiracion={termina} titulo={titulo}/>
        </main>
    )
}


export default JuegosOfertaReventa