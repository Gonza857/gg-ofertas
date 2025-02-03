import {obtenerPlusStock} from "@/dominio/servicios/playstationplus";
import TablaPlusLiquidacion from "@/components/page-components/reventa/TablaPlusLiquidacion";
import TablaPlusLiquidacionAdmin from "@/components/page-components/admin/TablaPlusLiquidacionAdmin";

async function StockPlayStationPlusAdmin() {
    const subscripciones = await obtenerPlusStock()
    return (
        <main className={"styledMain pt-4"}>
            <article className={"w-full sm:w-11/12 lg:w-3/4 xl:w-7/12 mx-auto"}>
                <h1 className="text-xl md:text-3xl font-bold text-center mb-4">
                    Subscripciones PlayStation Plus En Liquidación PS4 & PS5
                </h1>
                <TablaPlusLiquidacionAdmin subscripciones={subscripciones}/>
            </article>
        </main>
    )
}

export default StockPlayStationPlusAdmin

