"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Pen, Trash2} from "lucide-react";

function TablaJuegosStock(props) {
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
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Stock</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>P.C</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>P.R</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Consola</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Tipo</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>M.I</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Idioma</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Editar</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Eliminar</TableHead>
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

const Registro = ({juego: j, editarJuego, eliminarJuego}) => {
    return (
        <TableRow>
            <TableCell className={"p-1 py-2"}>{j.nombre}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.stock}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>${j.precioCliente.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>${j.precioReventa.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.consola.join("/")}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.tipo}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.mostrarIdioma ? "Sí" : "No"}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.idioma ?? "-"}</TableCell>
            <TableCell className={"p-1 text-center"}>
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() => editarJuego(j)}
                >
                    <Pen
                        className="h-4 w-4 mx-auto"
                    />
                </Button>
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() => eliminarJuego(j)}
                >
                    <Trash2
                        className="h-4 w-4 mx-auto"
                    />
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default TablaJuegosStock;