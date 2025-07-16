import Recordatorios from "@/components/page-components/consumidores/juegos/ofertas/Recordatorios";
import TablaJuegosOfertaReventa from "@/components/page-components/reventa/TablaJuegosOfertaReventa";
import React from "react";
import {cookies} from "next/headers";
import {obtenerJuegosOferta} from "@/dominio/servicios/juegos";
import InformacionJuegosOfertaReventa from "@/app/(pages)/reventa/(components)/InformacionJuegosOfertaReventa";

async function GrillaOfertasReventa() {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosOferta("reseller", token)
    if (!resultado.exito) return <>Error</>

    return (
        <>
            <h2 className="mt-4 text-2xl font-bold mb-2 text-center">{resultado.data.titulo}</h2>
            <InformacionJuegosOfertaReventa fecha={resultado.data.termina}/>
            <TablaJuegosOfertaReventa
                juegos={resultado.data.juegos}
                fechaExpiracion={resultado.data.termina}
                titulo={resultado.data.titulo}
            />
        </>
    )
}

export default GrillaOfertasReventa