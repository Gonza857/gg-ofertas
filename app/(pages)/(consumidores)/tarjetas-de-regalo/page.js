import React, {Suspense} from "react";
import BrandSpinner from "@/app/(modules)/admin/(components)/BrandSpinner";
import GrillaTarjetas from "@/app/(pages)/(consumidores)/(components)/GrillaTarjetas";

async function TartejasDeRegalo() {
    return (
            <main className="styledMain pt-20">
                <h2 className={"text-2xl font-bold mb-2 text-center pt-4"}>Tarjetas de regalo</h2>
                <article className={"w-full sm:w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-4"}>
                    <Suspense fallback={
                        <BrandSpinner/>
                    }>
                        <GrillaTarjetas/>
                    </Suspense>
                </article>
            </main>
    )
}


export default TartejasDeRegalo;