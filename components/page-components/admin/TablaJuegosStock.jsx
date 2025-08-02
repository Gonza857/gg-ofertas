"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Eye, Minus, Package, Pen, Plus, Trash2} from "lucide-react";
import {useStockStore} from "@/app/(modules)/admin/context/contextoJuego";
import {useEffect} from "react";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";

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
    const {updateStockJE} = useStockStore()
    const {copiar, copiado} = useCopiarAlPortapapeles()
    const textoBase = `${j.nombre} ${j.idioma !== "-" ? `(${j.idioma})` : ""} [${j.consola}]
    Cuenta ${j.tipo} $`
    const textoReventa = `${textoBase}${j.precioReventa}`
    const textoCliente = `${textoBase}${j.precioCliente}`

    return (
        <TableRow className={""}>
            <TableCell className={"p-0"}>{j.nombre}</TableCell>
            <TableCell className={"p-0 text-center"}>
                <div className="flex items-center justify-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateStockJE(j.id, -1)}
                        disabled={j.stock === 0}
                        className="h-8 w-8 p-0"
                    >
                        <Minus className="h-4 w-4"/>
                    </Button>
                    <div className="flex items-center justify-center">
                        <span>{j.stock}</span>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            console.log("Juego", j)
                            updateStockJE(j.id, 1)
                        }}
                        className="h-8 w-8 p-0"
                    >
                        <Plus className="h-4 w-4"/>
                    </Button>
                </div>
            </TableCell>
            <TableCell className={"p-0 text-center cursor-pointer"} onClick={() => copiar(textoCliente, j.id)}>
                ${j.precioCliente.toLocaleString("es-AR")}
            </TableCell>
            <TableCell className={"p-0 text-center cursor-pointer"} onClick={() => copiar(textoReventa, j.id)}>
                ${j.precioReventa.toLocaleString("es-AR")}
            </TableCell>
            <TableCell className={"p-0 text-center"}>{j.consola.join("/")}</TableCell>
            <TableCell className={"p-0 text-center"}>{j.tipo === "Primaria" ? "1°" : "2°"}</TableCell>
            <TableCell className={"p-0 text-center"}>{j.idioma ?? "-"}</TableCell>
            <TableCell className={"p-1 text-center"}>
                <div className={"flex justify-center gap-2"}>
                    <Button
                        variant={"outline"}
                        size={"sm"}
                        onClick={() => {
                        }}
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
        </TableRow>
    )
}

export default TablaJuegosStock;