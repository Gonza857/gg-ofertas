import TablaJuegosStockAdmin from "@/components/page-components/admin/TablaJuegosStockAdmin";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import Link from "next/link";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {obtenerJuegosStock} from "@/dominio/servicios/stock-juegos";
import {Suspense} from "react"
import TablaJuegosStock from "@/app/(modules)/admin/(components)/stock/TablaJuegosStock";
import SmallSpinner from "@/app/(modules)/admin/(components)/SmallSpinner";

export const dynamic = "force-dynamic";

async function StockJuegos() {
    return (
        <main className={"styledAdminMain"}>
            <article className={"w-full lg:w-11/12 mx-auto sm:px-2"}>
                <div className={"flex justify-between items-center relative mb-4"}>
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
                <Suspense fallback={
                    <div className="text-center py-10">
                        <SmallSpinner />
                        <p className="text-muted-foreground">Cargando juegos...</p>
                    </div>
                }>
                    <TablaJuegosStock/>
                </Suspense>

            </article>
        </main>
    )
}

export default StockJuegos

