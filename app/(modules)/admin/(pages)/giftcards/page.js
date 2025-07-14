import TablaTarjetasRegaloAdmin from "@/components/page-components/admin/TablaTarjetasRegaloAdmin";
import {obtenerTodasLasTarjetas} from "@/dominio/servicios/giftcards";
import {cookies} from "next/headers";

async function TarjetasDeRegaloAdmin () {
    const token = cookies().get("access-token")?.value
    const resultado = await obtenerTodasLasTarjetas("admin", token)

    return (
        <main className={"styledMain pt-4"}>
            <article className={"w-full md:w-10/12 mx-auto sm:p-2 md:p-0"}>
                <TablaTarjetasRegaloAdmin tarjetas={resultado.data ?? []}/>
            </article>
        </main>
    )
}

export default TarjetasDeRegaloAdmin