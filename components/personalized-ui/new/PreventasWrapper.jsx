"use client"

import {useRouter} from "next/navigation";
import {SinProductos} from "@/components/personalized-ui/new/SinProductos";
import PreventaCard from "@/app/(pages)/(consumidores)/(components)/preventa/PreventaCard";
import React from "react";

function PreventasWrapper ({preventas}) {
    const router = useRouter();
    if (preventas.length === 0) {
        return (
            <div className={"w-full md:w-1/2 mx-auto"}>
                <SinProductos
                    title={"No hay preventas."}
                    description={"En este momento no hay preventas activas."}
                    actionLabel={"Volver al inicio"}
                    onAction={() => router.push("/")}
                />
            </div>
        )
    }

    return (
        <>
            <h2 className="mt-4 text-2xl font-bold mb-2 text-center">Preventas</h2>
            <div
                className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-1 md:px-0 md:pb-4">
                {preventas.map((p, index) => (
                    <PreventaCard key={index} preventa={p}/>
                ))}
            </div>
        </>
    )
}

export default PreventasWrapper;