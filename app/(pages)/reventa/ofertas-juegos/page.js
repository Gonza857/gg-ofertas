import TablaJuegosOfertaReventa from "@/components/page-components/reventa/TablaJuegosOfertaReventa";
import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import {Suspense} from "react";

async function JuegosOfertaReventa() {
    const {juegos, termina, titulo} = await obtenerJuegosOferta()

    return (
        <main className={"styledMain"}>
            <Suspense fallback={<h1>Cargando juegos...</h1>}>
                <TablaJuegosOfertaReventa juegos={juegos} fechaExpiracion={termina} titulo={titulo}/>
            </Suspense>
        </main>
    )
}


export default JuegosOfertaReventa