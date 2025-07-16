import React, {Suspense} from "react";
import Recordatorios from "@/components/page-components/reventa/juegos/stock/Recordatorios";
import BrandSpinner from "@/app/(modules)/admin/(components)/BrandSpinner";
import WrapperJuegosStock from "@/app/(pages)/(consumidores)/(components)/WrapperJuegosStock";
import InformacionJuegosStockReventa from "@/app/(pages)/reventa/(components)/InformacionJuegosStockReventa";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de juegos en stock para revendedores",
};

async function StockJuegos() {
    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 lg:w-8/12 mx-auto px-2 pt-20"}>
            <h2 className="mt-4 text-2xl font-bold mb-2 text-center">Juegos en stock PS4 & PS5</h2>
            <InformacionJuegosStockReventa/>
            <Suspense fallback={
                <BrandSpinner/>
            }>
                <WrapperJuegosStock cliente={false}/>
            </Suspense>
        </main>
    )
}


export default StockJuegos

