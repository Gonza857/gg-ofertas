import {cookies} from "next/headers";
import {obtenerJuegosStock} from "@/dominio/servicios/stock-juegos";
import TablaJuegosStock from "@/components/page-components/principales/stock/TablaJuegosStock";
import React from "react";

async function WrapperJuegosStock ({consola = undefined, cliente = false}) {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosStock(token, consola);

    return (
        <TablaJuegosStock juegos={resultado.data ?? []} cliente={cliente}/>

    )
}


export default WrapperJuegosStock