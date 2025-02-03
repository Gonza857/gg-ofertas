"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Check, Copy} from "lucide-react";

function TablaJuegosStock({juegos}) {
    return <Tabla juegos={juegos}/>
}


const Tabla = (props) => {
    return (
        <Table>
            <TableCaption>Juegos en stock - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo {...props}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-3/12 px-2 md:px-4"}>Nombre</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Consola</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Precio</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Tipo</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Copiar</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({juegos, editarJuego, eliminarJuego}) => {
    return (
        <TableBody>
            {juegos.map(j => (
                <Registro
                    juego={j}
                    key={j.id}
                    editarJuego={editarJuego}
                    eliminarJuego={eliminarJuego}
                />))
            }
        </TableBody>
    )
}

const Registro = ({juego: j}) => {
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const textoParaCopiar = `${j.nombre} ${j.mostrarIdioma && j.idioma} | ${j.tipo} | ${j.consola} | $${j.precioReventa.toLocaleString("es-AR")}`;

    return (
        <TableRow onClick={() => copiar(textoParaCopiar, j.id)}>
            <TableCell className={"p-1 py-2"}>{j.nombre} {j.mostrarIdioma && j.idioma}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.consola}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>${j.precioReventa.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.tipo}</TableCell>
            <TableCell className="hidden md:table-cell p-1">
                <div
                    onClick={() => copiar(textoParaCopiar, j.id)}
                    className={"flex justify-center items-center cursor-pointer w-fit mx-auto"}>
                    {copiado === j.id ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                    <span className="sr-only">Copiar información del Juego</span>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default TablaJuegosStock;