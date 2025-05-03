import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import TablaJuegosOfertaAdmin from "@/components/page-components/admin/TablaJuegosOferta";
import {cookies} from "next/headers";

const cookie = cookies().get("access-token")?.value

async function Ofertas() {
    const resultado = await obtenerJuegosOferta("admin", cookie);
    if (!resultado.exito) return <>Error</>

    return (
        <>
            <h2 className={"font-semibold"}>{resultado.titulo} | {resultado.termina}</h2>
            <p className={"italic"}>Ofertas disponibles {resultado.juegos.length}</p>
            <TablaJuegosOfertaAdmin ofertas={resultado}/>
        </>
    )
}

export default Ofertas;