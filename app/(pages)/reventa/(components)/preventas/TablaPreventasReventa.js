"use client"

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Gamepad2} from "lucide-react";
import React from "react";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa6";

function TablaPreventasReventa({preventas}) {

    return (
            <Card>
                <CardHeader>
                    <CardTitle className={"flex gap-2"}>
                        <Gamepad2 className="h-5 w-5"/>
                        Preventas PS4/PS5
                    </CardTitle>
                    <CardDescription>Consultar disponibilidad de juegos no listados.</CardDescription>
                </CardHeader>
                <CardContent className={"space-y-4 px-2 md:px-6 pb-2 md:pb-6"}>
                    <div className="w-full overflow-x-auto">
                        <TablaPreventas preventas={preventas}/>
                    </div>
                </CardContent>
            </Card>
    )
}

const TablaPreventas = (props) => {
    return (
        <Table className="min-w-[600px]">
            <TableCaption>Preventas - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo {...props}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"px-2 md:px-4"}>Preventa</TableHead>
                <TableHead className={"px-2 md:px-4"}>Tipo</TableHead>
                <TableHead className={"px-2 md:px-4"}>Consola</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>Estreno</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>Precio</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>Contacto</TableHead>
            </TableRow>
        </TableHeader>
    )
}


const Cuerpo = ({preventas = []}) => {
    return (
        <TableBody>
            {preventas.map(j => (
                    <Registro
                        preventa={j}
                        key={j.id}
                    />))
            }
        </TableBody>
    )
}

const Registro = ({preventa}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const mensaje = `${preventa.titulo} - ${preventa.tipo} [${preventa.plataforma}] $${preventa.precio}`
    return (
        <TableRow>
            <TableCell
                className="font-medium p-1 py-2"
                onClick={() => copiar(mensaje, preventa.titulo)}
            >
                {preventa.titulo}
            </TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{preventa.tipo}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{preventa.plataforma}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{preventa.fechaLanzamiento}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>${preventa.precio}</TableCell>
            <TableCell className="p-2 text-center">
                <div className={"flex gap-2 justify-center mx-auto"}>
                    <Link
                        href={`https://wa.me/5491132001372?text=${"Me interesa " + encodeURIComponent(mensaje)}`}
                        className="w-fit flex justify-center items-center text-center rounded-full"
                        target="_blank">
                        <FaWhatsapp className="h-7 w-7 text-green-500"/>

                    </Link>
                    <Link
                        href={`https://t.me/garretg_psn?text=${"Me interesa " + encodeURIComponent(mensaje)}`}
                        className="w-fit flex justify-center items-center text-center rounded-full"
                        target="_blank"
                    >
                        <FaTelegram className="h-7 w-7 text-blue-500"/>
                    </Link>
                </div>

            </TableCell>
        </TableRow>
    )
}

export default TablaPreventasReventa
