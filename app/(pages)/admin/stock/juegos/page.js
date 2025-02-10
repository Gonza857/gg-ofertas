import {obtenerPlusStock} from "@/dominio/servicios/playstationplus";
import TablaPlusLiquidacion from "@/components/page-components/reventa/TablaPlusLiquidacion";
import TablaPlusLiquidacionAdmin from "@/components/page-components/admin/TablaPlusLiquidacionAdmin";
import {obtenerJuegosStock} from "@/dominio/servicios/juegos";
import TablaJuegosStockAdmin from "@/components/page-components/admin/TablaJuegosStockAdmin";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import Link from "next/link";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

async function StockJuegos() {
    const juegos = await obtenerJuegosStock()
    return (
        <main className={"styledMain pt-4"}>
            <article className={"w-full sm:w-11/12 md:w-3/4 mx-auto p-2 md:p-0"}>
                <div className={"flex justify-center items-center relative mb-4"}>
                    <h1 className="text-xl md:text-2xl font-bold text-center w-fit self-center">
                        Juegos en Stock
                    </h1>
                    <Link href="/admin/stock/juegos/agregar" className={"absolute right-0 w-fit h-fit p-0 m-0"}>
                        <Button>
                            Agregar
                            <Plus/>
                        </Button>
                    </Link>
                </div>
                <TablaJuegosStockAdmin juegos={juegos}/>
            </article>
        </main>
    )
}

export default StockJuegos

