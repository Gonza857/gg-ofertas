import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import {BsPlaystation} from "react-icons/bs";
import {SiSteam} from "react-icons/si";
import React from "react";

const estiloIcono = "mr-2 w-8 h-8"

const tarjetas = [
    {
        nombre: "PlayStation Network",
        ruta: "/tarjetas-de-regalo/playstation",
        estilo: "bg-blue-800",
        icono: <BsPlaystation className={estiloIcono}/>
    },
    {
        nombre: "Steam Wallet",
        ruta: "/tarjetas-de-regalo/steam",
        estilo: "bg-gray-800",
        icono: <SiSteam className={estiloIcono}/>
    },
]

async function TartejasDeRegalo() {
    return (
        <main className={"styledMain px-2 pb-4"}>
            <h1 className={"text-2xl font-semibold text-center py-4 font-sans"}>Selecciona una plataforma</h1>
            <article className={"w-11/12 sm:w-10/12 md:w-7/12 xl:w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2"}>
                {tarjetas.map((e) => (
                    <Tarjeta key={e.nombre} datos={e}/>
                ))}
            </article>
        </main>
    )
}

    const Tarjeta = ({datos}) => {
        return (
            <Link href={datos.ruta}
                  className={`h-fit transition-all duration-200 hover:scale-105 cursor-pointer rounded-xl ${datos.estilo}`}>
                <Card
                    className={`bg-transparent border-none overflow-hidden w-full mx-auto h-40 sm:h-32 flex justify-center items-center`}>
                    <CardContent className="p-6 text-white flex gap-2 items-center">
                        {datos.icono}
                        <h2 className={`p-0 text-xl`}>{datos.nombre}</h2>
                    </CardContent>
                </Card>
            </Link>
        )
    }


export default TartejasDeRegalo;