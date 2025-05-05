import TablaJuegosStock from "@/components/page-components/principales/stock/TablaJuegosStock";
import {obtenerJuegosStock} from "@/dominio/servicios/stock-juegos";
import Recordatorios from "@/components/page-components/consumidores/stock/Recordatorios";
import {cookies} from "next/headers";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de juegos en stock",
};

async function JuegosEnStock ({params}) {
    let consola = params.consola
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosStock(token, consola);
    console.log("RESULTADO DE API", resultado)

    return (
        <main className={"styledMain py-4"}>
            <article className={"w-full sm:w-11/12 md:w-10/12 xl:w-3/4 mx-auto p-2 md:p-0"}>
                <h1 className="text-xl md:text-3xl font-bold text-center mb-4">
                    Juegos en stock {consola.toUpperCase()}
                </h1>
                <Recordatorios/>
                <TablaJuegosStock juegos={resultado.data ?? []} cliente={true}/>
            </article>
        </main>
    )
}

export default JuegosEnStock