import {Box, Clock, Gamepad2, Scroll} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
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
    const resultado = await obtenerJuegosStock()
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
        <main className={"styledMain w-full sm:w-11/12 md:w-8/12 mx-auto px-2 mt-24"}>
            <h2 className="text-2xl font-bold mb-2 text-center">Juegos en stock PS4 & PS5</h2>
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
        </main>
    )
}


export default StockJuegos

