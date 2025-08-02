import TablaJuegosStock from "@/components/page-components/principales/stock/TablaJuegosStock";
import {obtenerJuegosStock} from "@/dominio/servicios/stock-juegos";
import Recordatorios from "@/components/page-components/consumidores/juegos/stock/Recordatorios";
import {cookies} from "next/headers";
import React, {Suspense} from "react";
import BrandSpinner from "@/app/(modules)/admin/(components)/BrandSpinner";
import WrapperJuegosStock from "@/app/(pages)/(consumidores)/(components)/WrapperJuegosStock";
import InformacionJuegosStock from "@/app/(pages)/(consumidores)/(components)/InformacionJuegosStock";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de juegos en stock",
};

async function JuegosEnStock () {
    return (
        <main className={"styledMain pt-20"}>
            <article className={"w-full sm:w-11/12 md:w-10/12 xl:w-3/4 mx-auto p-2 md:p-0"}>
                <h2 className="mt-4 text-2xl font-bold mb-2 text-center">Juegos en stock PS4 & PS5</h2>
                <InformacionJuegosStock/>
                <Suspense fallback={
                    <BrandSpinner/>
                }>
                    <WrapperJuegosStock cliente={true} tipoCliente={"customer"}/>
                </Suspense>
            </article>
        </main>
    )
}

export default JuegosEnStock