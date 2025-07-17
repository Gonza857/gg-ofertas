"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import MyCarousel from "@/components/personalized-ui/MyCarousel";
import React from "react";

function Swiper({productos, idExcluido, tipo, titulo, subtitulo, textoBoton, ruta}) {
    if (productos.length === 0) return;
    if (idExcluido) {
        productos = productos.filter(p => p.id !== idExcluido);
    }
    return (
        <div
            className={`w-full mx-auto flex 
            flex-col items-center justify-center rounded-xl px-2 md:px-8 py-4`}
        >
            <div className={"flex justify-between w-full pb-4"}>
                <div className={"flex flex-col gap-2"}>
                    <p className={'text-xl md:text-3xl font-bold'}>
                        {titulo}
                    </p>
                    <p className={"text-sm md:text-base"}>
                        {subtitulo}
                    </p>
                </div>
                <Link href={ruta} className={"w-fit"}>
                    <Button variant="outline">
                        {textoBoton}
                    </Button>
                </Link>
            </div>
            {/* MAP DE GIFTCARDS */}
            <MyCarousel productos={productos} tipo={tipo}/>
        </div>
    )
}

export default Swiper