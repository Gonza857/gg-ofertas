import TablaTarjetasRegaloReventa from "@/components/page-components/reventa/TablaTarjetasRegaloReventa";
import {tarjetasPsn, tarjetasPsnTq, tarjetasSteam} from "@/static-data/item.giftcards";

async function TarjetasDeRegaloReventa () {
    const tarjetas = [...tarjetasPsn, ...tarjetasSteam,  ...tarjetasPsnTq]

    return (
        <main className={"styledMain px-2 pb-4"}>
            <h1 className={"text-2xl font-semibold text-center py-4 font-sans"}>Tarjetas de regalo</h1>
            <article className={"w-full sm:w-11/12 md:w-3/4 xl:w-1/2 mx-auto p-2 md:p-0"}>
                <TablaTarjetasRegaloReventa tarjetas={tarjetas}/>
            </article>
        </main>
    )
}


export default TarjetasDeRegaloReventa