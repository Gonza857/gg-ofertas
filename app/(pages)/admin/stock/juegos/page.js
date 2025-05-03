import TablaJuegosStockAdmin from "@/components/page-components/admin/TablaJuegosStockAdmin";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import Link from "next/link";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {obtenerJuegosStock} from "@/dominio/servicios/stock-juegos";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

async function StockJuegos() {
    const resultado = await obtenerJuegosStock(cookies().get("access-token")?.value)
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
        <main className={"styledMain pt-4"}>
            <article className={"w-full lg:w-11/12 mx-auto sm:px-2"}>
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
                <TablaJuegosStockAdmin juegos={resultado.data ?? []}/>
            </article>
        </main>
    )
}

export default StockJuegos

