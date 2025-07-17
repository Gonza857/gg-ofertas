import {Suspense} from "react";
import PreventaWrapper from "@/app/(pages)/(consumidores)/(components)/preventa/PreventaWrapper";
import BrandSpinner from "@/app/(modules)/admin/(components)/BrandSpinner";

async function PreventaDetallePage({params}) {
    const id = params.id

    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 xl:w-8/12 mx-auto px-2 pt-20"}>
            <Suspense fallback={<BrandSpinner/>}>
                <PreventaWrapper id={id}/>
            </Suspense>
        </main>
    )
}

export default PreventaDetallePage