"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Check, Copy, Pen, Trash2} from "lucide-react";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";

function TablaTarjetasDeRegaloReventa ({tarjetas}) {
    const tablaProps = {
        tarjetas,
    }

    return (
        <>
            <Tabla {...tablaProps}/>
        </>
    )
}

const Tabla = (props) => {
    return (
        <Table>
            <TableCaption>Tarjetas de regalo - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo {...props}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-4/12 px-2 md:px-4"}>Tarjeta de regalo</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Región</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Precio</TableHead>
                <TableHead className={"w-2/12 hidden md:table-cell px-2 md:px-4 text-center"}>Copiar</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({tarjetas}) => {
    return (
        <TableBody>
            {tarjetas.map(p => (
                <Registro
                    o={p}
                    key={p.id}
                />))
            }
        </TableBody>
    )
}

const Registro = ({o}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()

    return (
        <TableRow
            onClick={() => copiar(`${o.nombre} | ${o.region} | ${o.precioReventa}`, o.nombre)}
        >
            <TableCell className={"p-1 text-left"}>{o.nombre}</TableCell>
            <TableCell className={"p-1 text-center"}>{o.region}</TableCell>
            <TableCell className={"p-1 text-center"}>${o.precioReventa.toLocaleString("es-AR")}</TableCell>
            <TableCell className="hidden md:table-cell p-2">
                <div
                    onClick={() => copiar(`${o.nombre} | ${o.region} | ${o.precioReventa}`, o.nombre)}
                    className={"flex justify-center items-center cursor-pointer"}>
                    {copiado === o.nombre ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                    <span className="sr-only">Copiar información del juego</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default TablaTarjetasDeRegaloReventa