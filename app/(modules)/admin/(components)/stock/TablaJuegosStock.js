import {cookies} from "next/headers";
import {obtenerJuegosStock} from "@/dominio/servicios/stock-juegos";
import {redirect} from "next/navigation";
import TablaJuegosStockAdmin from "@/components/page-components/admin/TablaJuegosStockAdmin";

async function TablaJuegosStock() {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerJuegosStock(token, undefined, "admin")
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
        <TablaJuegosStockAdmin juegos={resultado.data}/>
    )
}

export default TablaJuegosStock;