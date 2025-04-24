"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Eye, Pen, Trash2} from "lucide-react";

function TablaJuegosStock(props) {
    return (
        <Table className={""}>
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
                <TableHead className={"px-2 md:px-4"}>Nombre</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>Stock</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>P.C</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>P.R</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>Consola</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>Tipo</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Idioma</TableHead>
                <TableHead className={"px-2 md:px-4 text-center"}>Accion</TableHead>
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
        <TableRow className={""}>
            <TableCell className={"p-0"}>{j.nombre}</TableCell>
            <TableCell className={"p-0 text-center"}>{j.stock}</TableCell>
            <TableCell className={"p-0 text-center"}>${j.precioCliente.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-0 text-center"}>${j.precioReventa.toLocaleString("es-AR")}</TableCell>
            <TableCell className={"p-0 text-center"}>{j.consola.join("/")}</TableCell>
            <TableCell className={"p-0 text-center"}>{j.tipo === "Primaria" ? "1°" : "2°"}</TableCell>
            <TableCell className={"p-0 text-center"}>{j.idioma ?? "-"}</TableCell>
            <TableCell className={"p-1 text-center"}>
                <div className={"flex justify-center gap-2"}>
                    <Button
                        variant={"outline"}
                        size={"sm"}
                        onClick={() => {}}
                    >
                        <Eye
                            className="h-4 w-4 mx-auto"
                        />
                    </Button>
                    <Button
                        variant={"outline"}
                        size={"sm"}
                        onClick={() => editarJuego(j)}
                    >
                        <Pen
                            className="h-4 w-4 mx-auto"
                        />
                    </Button>
                    <Button
                        variant={"outline"}
                        size={"sm"}
                        onClick={() => eliminarJuego(j)}
                    >
                        <Trash2
                            className="h-4 w-4 mx-auto"
                        />
                    </Button>
                </div>

            </TableCell>
            {/*<TableCell className={"p-0 text-center"}>*/}
            {/*   */}
            {/*</TableCell>*/}
            {/*<TableCell className={"p-1 text-center"}>*/}
            {/*    */}
            {/*</TableCell>*/}
        </TableRow>
    )
}

export default TablaJuegosStock;