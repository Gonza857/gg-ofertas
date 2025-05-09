import TablaJuegosStock from "@/components/page-components/principales/stock/TablaJuegosStock";
import {obtenerJuegosStock} from "@/dominio/servicios/stock-juegos";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import React from "react";
import Recordatorios from "@/components/page-components/reventa/juegos/stock/Recordatorios";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de juegos en stock para revendedores",
};

async function StockJuegos() {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosStock(token, undefined)
    if (!resultado.exito) {
        if (resultado.status === 401) {
            redirect("/")
        } else {
            return <>
                Error al pedir los datos
            </>
        }
    }

    return (
        <main className={"styledMain pt-20"}>
            <article className={"w-full sm:w-11/12 md:w-10/12 xl:w-3/4 mx-auto p-2 md:p-0"}>
                <h2 className="text-xl md:text-3xl font-bold text-center mt-4">
                    Juegos en stock PS4 & PS5
                </h2>
                <Recordatorios/>
                <p className={"mt-2 text-sm text-neutral-500 dark:text-neutral-400"}>
                    El precio publicado es abonando por transferencia bancaria CVU/CBU.
                    pagos.
                </p>
                <p className={"mt-2 text-sm text-neutral-500 dark:text-neutral-400"}>
                    Si el juego esta de oferta. Se toma el precio de oferta.
                </p>
                <p className={"mt-2 text-sm text-neutral-500 dark:text-neutral-400"}>
                    Juegos disponibles para reventa.
                </p>
                <TablaJuegosStock juegos={resultado.data ?? []} cliente={false}/>
            </article>
        </main>
    )
}


export default StockJuegos

