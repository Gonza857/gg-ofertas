import React, {Suspense} from "react";
import PreventasReventaList from "@/app/(pages)/reventa/(components)/preventas/PreventasReventaList";
import BrandSpinner from "@/app/(modules)/admin/(components)/BrandSpinner";
import InformacionPreventasReventa from "@/app/(pages)/reventa/(components)/preventas/InformacionPreventasReventa";

async function PreventasReventa() {
    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 lg:w-7/12 mx-auto px-2 pt-20 pb-4"}>
            <h2 className="mt-4 text-2xl font-bold mb-2 text-center">Preventas PS4/PS5</h2>
            <InformacionPreventasReventa/>
            <Suspense fallback={<BrandSpinner/>}>
                <PreventasReventaList/>
            </Suspense>
        </main>
    )

}

export default PreventasReventa;