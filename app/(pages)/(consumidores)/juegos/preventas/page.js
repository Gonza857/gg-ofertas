import React from "react";
import {cookies} from "next/headers";
import {obtenerPreventas} from "@/dominio/servicios/preventas";
import PreventasWrapper from "@/components/personalized-ui/new/PreventasWrapper";

async function PreventasList() {
    const token = cookies().get("access-token")?.value
    const resultadoPreventas = await obtenerPreventas(undefined, token)
    if (!resultadoPreventas.exito) return <>Error</>

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 xl:w-8/12 mx-auto px-2 pt-20"}>
            <PreventasWrapper  preventas={resultadoPreventas.data}/>
        </main>

    )
}

export default PreventasList;

