import {obtenerPlusStock} from "@/dominio/servicios/playstationplus";
import TablaPlusLiquidacionAdmin from "@/components/page-components/admin/TablaPlusLiquidacionAdmin";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

async function StockPlayStationPlusAdmin() {
    const {exito, data} = await obtenerPlusStock("admin")
    if (!exito) return <>Error</>

    return (
        <section className={"w-full mx-auto p-2 md:p-0"}>
            <h1 className="text-xl md:text-3xl font-bold text-center mb-4">
                Stock PlayStation Plus
            </h1>
            <TablaPlusLiquidacionAdmin subscripciones={data}/>
        </section>
    )
}

export default StockPlayStationPlusAdmin

