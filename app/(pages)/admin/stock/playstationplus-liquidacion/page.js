import {obtenerPlusStock} from "@/dominio/servicios/playstationplus";
import TablaPlusLiquidacion from "@/components/page-components/reventa/TablaPlusLiquidacion";
import TablaPlusLiquidacionAdmin from "@/components/page-components/admin/TablaPlusLiquidacionAdmin";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

async function StockPlayStationPlusAdmin() {
    const subscripciones = await obtenerPlusStock()
    return (
        <main className={"styledMain pt-4"}>
            <article className={"w-full sm:w-11/12 md:w-3/4 xl:w-1/2 mx-auto p-2 md:p-0"}>
                <h1 className="text-xl md:text-3xl font-bold text-center mb-4">
                    Stock PlayStation Plus
                </h1>
                <TablaPlusLiquidacionAdmin subscripciones={subscripciones}/>
            </article>
        </main>
    )
}

export default StockPlayStationPlusAdmin

