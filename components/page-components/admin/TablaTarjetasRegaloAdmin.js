"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Pen, Trash2} from "lucide-react";

function TablaTarjetasRegaloAdmin ({tarjetas}) {

    const tablaProps = {
        tarjetas,
        eliminar: (o) => console.log(`elimino ${o.nombre}`),
        editar: (o) => console.log(`edito ${o.nombre}`),
    }

    return (
        <>
            <Tabla {...tablaProps}/>
        </>
    )
}

export default TablaTarjetasRegaloAdmin

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
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>P.C</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>P.R</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Editar</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Eliminar</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({tarjetas, editar, eliminar}) => {
    return (
        <TableBody>
            {tarjetas.map(p => (
                <Registro
                    o={p}
                    key={p.id}
                    editar={editar}
                    eliminar={eliminar}
                />))
            }
        </TableBody>
    )
}

const Registro = ({o, eliminar, editar}) => {
    return (
        <TableRow>
            <TableCell className={"p-1 text-left"}>{o.nombre}</TableCell>
            <TableCell className={"p-1 text-center"}>{o.region}</TableCell>
            <TableCell className={"p-1 text-center"}>${o.precioCliente.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 text-center"}>${o.precioReventa.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 text-center"}>
                <Pen
                    className="h-4 w-4 mx-auto"
                    onClick={() => editar(o)}
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Trash2
                    className="h-4 w-4 mx-auto"
                    onClick={() => eliminar(o)}
                />
            </TableCell>
        </TableRow>
    )
}