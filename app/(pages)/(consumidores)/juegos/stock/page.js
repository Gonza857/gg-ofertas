import TablaJuegosStock from "@/components/page-components/principales/stock/TablaJuegosStock";
import {obtenerJuegosStock} from "@/dominio/servicios/stock-juegos";
import Recordatorios from "@/components/page-components/consumidores/juegos/stock/Recordatorios";
import {cookies} from "next/headers";
import React from "react";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de juegos en stock",
};

async function JuegosEnStock () {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosStock(token, undefined)
    return (
        <main className={"styledMain pt-20"}>
            <article className={"w-full sm:w-11/12 md:w-10/12 xl:w-3/4 mx-auto p-2 md:p-0"}>
                <h2 className="text-xl md:text-3xl font-bold text-center mt-4">
                    Juegos en stock PS4 & PS5
                </h2>
                <Recordatorios/>
                <p className={"mt-2 text-sm text-neutral-500 dark:text-neutral-400"}>
                    El precio publicado es abonando por transferencia bancaria CVU/CBU. Consultar financiacion en 3 o 6
                    pagos.
                </p>
                <p className={"mt-2 text-sm text-neutral-500 dark:text-neutral-400"}>
                    Si el juego esta de oferta. Se toma el precio de oferta.
                </p>
                <TablaJuegosStock juegos={resultado.data ?? []} cliente={true}/>
            </article>
        </main>
    )
}

export default JuegosEnStock