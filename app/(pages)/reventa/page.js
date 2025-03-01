import TablaJuegosOfertaReventa from "@/components/page-components/reventa/TablaJuegosOfertaReventa";
import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de ofertas para revendedores",
};

async function JuegosOfertaReventa() {
    const {juegos, termina, titulo} = await obtenerJuegosOferta()

    return (
        <main className={"styledMain"}>
            <TablaJuegosOfertaReventa juegos={juegos} fechaExpiracion={termina} titulo={titulo}/>
        </main>
    )
}


export default JuegosOfertaReventa