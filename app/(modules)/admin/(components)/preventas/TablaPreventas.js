"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Check, Copy, Pen} from "lucide-react";
import React from "react";
import {Button} from "@/components/ui/button";
import {FaTrash} from "react-icons/fa6";
import Link from "next/link";

function TablaPreventas({preventas}) {
    return (
        <Table>
            <TableCaption>Preventas - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo items={preventas}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-4/12 px-2 md:px-4"}>Titulo</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Fecha lanzamiento</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>P.B</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>P.R</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>P.C.T</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>P.C.L</TableHead>
                <TableHead className={"w-2/12 hidden md:table-cell px-2 md:px-4 text-center"}>Acción</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({items}) => {
    return (
        <TableBody>
            {items.map(i => (
                <Registro
                    item={i}
                    key={i.id}
                />))
            }
        </TableBody>
    )
}

const Registro = ({item}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const textoParaCopiarBase =
        `${item.titulo} - [${item.plataforma}]
        Lanzamiento: ${item.fechaLanzamiento} `
    const textoReventa =
        `${textoParaCopiarBase}
        Primaria $${item.precioReventa}`;
    const textoCliente =
        `${textoParaCopiarBase}
        Cuenta primaria $${item.precioClienteLista} (hasta 3 cuotas sin interés)
        Cuenta primaria $${item.precioClienteTransferencia} 20% OFF (transferencia bancaria)
        `;

    return (
        <TableRow>
            <TableCell className={"p-1 text-left"}>{item.titulo}</TableCell>
            <TableCell className={"p-1 text-center"}>{item.fechaLanzamiento}</TableCell>
            <TableCell className={"p-1 text-center"}>${item.precioBase}</TableCell>
            <TableCell
                onClick={() => copiar(textoReventa, item.titulo)}
                className={"p-1 text-center cursor-pointer"}
            >
                ${item.precioReventa}
            </TableCell>
            <TableCell
                className={"p-1 text-center cursor-pointer"}
                onClick={() => copiar(textoCliente, item.titulo)}
            >
                ${item.precioClienteTransferencia}
            </TableCell>
            <TableCell className={"p-1 text-center"}>${item.precioClienteLista}</TableCell>
            <TableCell className="hidden md:table-cell p-2">
                <div className={"flex gap-2"}>
                    <Button variant={"outline"} size={"sm"}>
                        {copiado === item.titulo ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                        <span className="sr-only">Copiar información de la membresía</span>
                    </Button>
                    <Link href={`/admin/juegos/preventas/editar/${item.id}`}>
                        <Button variant={"outline"} size={"sm"}>
                            <Pen className={"text-black"}/>
                        </Button>
                    </Link>
                    <Button variant={"outline"} size={"sm"}>
                        <FaTrash className={"text-black"}/>
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default TablaPreventas;