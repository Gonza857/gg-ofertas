import React, {Children} from "react";
import {cookies} from "next/headers";
import {obtenerPreventas} from "@/dominio/servicios/preventas";
import PreventaCard from "@/app/(pages)/(consumidores)/(components)/preventa/PreventaCard";

async function PreventasList() {
    const token = cookies().get("access-token")?.value
    const resultadoPreventas = await obtenerPreventas(undefined, token)
    if (!resultadoPreventas.exito) return <>Error</>

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 xl:w-8/12 mx-auto px-2 pt-20"}>
            <h2 className="mt-4 text-2xl font-bold mb-2 text-center">Preventas</h2>

            <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-1 md:px-0">
                {resultadoPreventas.data.map((p, index) => (
                    <PreventaCard key={index} preventa={p}/>
                ))}
            </div>
        </main>

    )
}

export default PreventasList;