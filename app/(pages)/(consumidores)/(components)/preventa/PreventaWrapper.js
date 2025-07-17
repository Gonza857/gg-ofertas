import {cookies} from "next/headers";
import {obtenerPreventaPorId, obtenerPreventas} from "@/dominio/servicios/preventas";
import PreventaDetalle from "@/app/(pages)/(consumidores)/(components)/preventa/PreventaDetalle";
import Link from "next/link";
import Swiper from "@/app/(pages)/(consumidores)/(components)/Swiper";
import React from "react";

async function PreventaWrapper({id}) {
    const cookie = cookies().get("access-token")?.value
    const resultado = await obtenerPreventaPorId(cookie, id);
    if (!resultado.exito) return <>Error</>

    const {exito, data: preventas} = await obtenerPreventas(undefined, cookie)
    if (!exito) return <>Error</>

    return (
        <>
            {/* Breadcrumb */}
            <div className="my-6">
                <nav className="text-sm text-gray-600">
                    <span>Inicio</span> <span className="mx-2">›</span>
                    <span>Juegos</span> <span className="mx-2">›</span>
                    <Link href={"/juegos/preventas"}>Preventas</Link> <span className="mx-2">›</span>
                    <span className="text-gray-900 font-medium">{resultado.data.titulo}</span>
                </nav>
            </div>

            <PreventaDetalle preventa={resultado.data}/>

            <Swiper
                productos={preventas}
                idExcluido={id}
                tipo={"preventa"}
                titulo={"¡Otras preventas que te pueden interesar!"}
                subtitulo={"Conseguilas al mejor precio en Garret Games"}
                ruta={"/juegos/preventas"}
                textoBoton={"Ver más"}
            />
        </>
    )
}

export default PreventaWrapper;