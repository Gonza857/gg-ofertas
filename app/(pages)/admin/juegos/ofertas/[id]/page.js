import {obtenerJuegosOferta, obtenerOfertaPorId} from "@/dominio/servicios/juegos";
import TablaJuegosOfertaAdmin from "@/components/page-components/admin/TablaJuegosOferta";
import {cookies} from "next/headers";

async function OfertaPorId({params}) {
    const id = params.id;
    const cookie = cookies().get("access-token")?.value
    const resultado = await obtenerOfertaPorId(cookie, id);
    if (!resultado.exito) return <>Error</>

    return (
        <>
            <h2 className={"font-semibold"}>{resultado.data.titulo} | {resultado.data.termina}</h2>
            <TablaJuegosOfertaAdmin ofertas={resultado.data}/>
        </>
    )
}

export default OfertaPorId;