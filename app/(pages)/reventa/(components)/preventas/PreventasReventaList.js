import {cookies} from "next/headers";
import {obtenerPreventas} from "@/dominio/servicios/preventas";
import React from "react";
import TablaPreventasReventa from "@/app/(pages)/reventa/(components)/preventas/TablaPreventasReventa";

async function PreventasReventaList() {
    const token = cookies().get("access-token")?.value
    const resultadoPreventas = await obtenerPreventas("reseller", token)
    if (!resultadoPreventas.exito) return <>Error</>

    return (
        <TablaPreventasReventa preventas={resultadoPreventas.data}/>
    )
}

export default PreventasReventaList;