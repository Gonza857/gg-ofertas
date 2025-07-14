"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Check, Copy} from "lucide-react";
import React from "react";
import {Badge} from "@/components/ui/badge";
import PlayStationPlusAdmin from "@/app/(modules)/admin/helpers/PlayStationPlusAdmin";

function TablaPlayStationPlus ({membresias}) {
    return (
        <Table>
            <TableCaption>PlayStation Plus - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo membresias={membresias}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-4/12 px-2 md:px-4"}>Producto</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Tipo</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Meses</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Consola</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Precio</TableHead>
                <TableHead className={"w-2/12 hidden md:table-cell px-2 md:px-4 text-center"}>Copiar</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({membresias}) => {
    return (
        <TableBody>
            {membresias.map(p => (
                <Registro
                    plusItem={p}
                    key={p.id}
                />))
            }
        </TableBody>
    )
}

const Registro = ({plusItem}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const textoParaCopiar =
        `${plusItem.titulo} ${plusItem.tipo} ${plusItem.meses} ${plusItem.consola} $${plusItem.precio}`

    return (
        <TableRow
            onClick={() => copiar(textoParaCopiar, plusItem.titulo)}
        >
            <TableCell className={"p-1 text-left"}>{plusItem.titulo}</TableCell>
            <TableCell className={"p-1 text-center"}>
                <Badge className={`${PlayStationPlusAdmin.diccionarioTipos[plusItem.tipo.toLowerCase()]} mx-1 md:mx-2 h-6`}>
                    {plusItem.tipo}
                </Badge>
            </TableCell>
            <TableCell className={"p-1 text-center"}>{plusItem.meses}</TableCell>
            <TableCell className={"p-1 text-center"}>{plusItem.consola}</TableCell>
            <TableCell className={"p-1 text-center"}>${plusItem.precio}</TableCell>
            <TableCell className="hidden md:table-cell p-2">
                <div
                    onClick={() => copiar(textoParaCopiar, plusItem.titulo)}
                    className={"flex justify-center items-center cursor-pointer"}>
                    {copiado === plusItem.titulo ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                    <span className="sr-only">Copiar información de la membresía</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default TablaPlayStationPlus