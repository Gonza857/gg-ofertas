import TablaJuegosStock from "@/components/page-components/principales/stock/TablaJuegosStock";
import {obtenerJuegosStock} from "@/dominio/servicios/stock-juegos";
import Recordatorios from "@/components/page-components/consumidores/stock/Recordatorios";
import {cookies} from "next/headers";
import React, {Suspense} from "react";
import BrandSpinner from "@/app/(modules)/admin/(components)/BrandSpinner";
import GrillaTarjetas from "@/app/(pages)/(consumidores)/(components)/GrillaTarjetas";
import WrapperJuegosStock from "@/app/(pages)/(consumidores)/(components)/WrapperJuegosStock";
import InformacionJuegosStock from "@/app/(pages)/(consumidores)/(components)/InformacionJuegosStock";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de juegos en stock",
};

async function JuegosEnStock({params}) {
    let consola = params.consola

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 lg:w-8/12 mx-auto px-2 pt-20"}>

            <h2 className="mt-4 text-2xl font-bold mb-2 text-center">
                Juegos en stock {consola.toUpperCase()}
            </h2>
            <InformacionJuegosStock/>
            <Suspense fallback={
                <BrandSpinner/>
            }>
                <WrapperJuegosStock consola={consola} cliente={true}/>
            </Suspense>

        </main>
    )
}

export default JuegosEnStock