"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Check, Copy, Pen, SaveIcon, Trash} from "lucide-react";
import {Button} from "@/components/ui/button";
import useModoEdicionPorFila from "@/components/custom-hooks/useEditarFila";
import {FcCancel} from "react-icons/fc";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {actualizarOfertas} from "@/dominio/servicios/juegos";
import {toastError, toastSuccess} from "@/lib/Toast";

function TablaJuegosOfertaAdmin({ofertas}) {
    const {
        items: juegos,
        editar,
        cancelar,
        actualizarItem,
        eliminarItem,
        cambiarModoEdicionItem
    } = useModoEdicionPorFila(ofertas.juegos);

    const actualizarJuego = async (datosForm) => {
        const itemsActualizados = actualizarItem(datosForm)
        const resultado = await actualizarOfertas({...ofertas, juegos: itemsActualizados});
        console.log("resultado", resultado);
        if (resultado.exito) {
            return toastSuccess("Listado actualizado correctamante.")
        }
        cambiarModoEdicionItem(datosForm.id)
        return toastError("No se pudo actualizar las ofertas.")
    }

    const eliminarJuego = async (id) => {
        eliminarItem(id)
        // server
    }

    const cuerpoProps = {
        juegos, editar, cancelar, actualizarItem, actualizarJuego, eliminarJuego
    }

    return (
        <Table>
            <TableCaption>Juegos en oferta - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo {...cuerpoProps}/>
        </Table>
    )
}

export default TablaJuegosOfertaAdmin

const Cuerpo = ({juegos = [], editar, cancelar, actualizarJuego, actualizarItem, eliminar, eliminarJuego}) => {
    return (
        <TableBody>
            {juegos.map(j => (
                <Registro
                    juego={j}
                    key={j.name}
                    activarModoEdicion={editar}
                    cancelar={cancelar}
                    actualizarItem={actualizarItem}
                    actualizarJuego={actualizarJuego}
                    eliminar={eliminarJuego}
                />))}
        </TableBody>
    )
}

const Registro = ({juego, activarModoEdicion, cancelar, actualizarJuego, eliminar}) => {
    // const precioJuego = redondearCien((juego.price) * 0.95).toFixed(0)
    return (
        <TableRow>
            <TableCell className="font-medium p-1 py-2">{juego.name}</TableCell>
            {juego.modoEdicion ?
                <CamposEdicion cancelar={cancelar} juego={juego} guardar={actualizarJuego} eliminar={eliminar}/>
                :
                <CamposNormales juego={juego} activarModoEdicion={activarModoEdicion}/>
            }
        </TableRow>
    )
}

const CamposNormales = ({juego, activarModoEdicion}) => {
    return (
        <>
            <TableCell className={"p-1 py-2"}>${juego.price}</TableCell>
            <TableCell className={"p-1 py-2"}>${juego.precioReventa}</TableCell>
            <TableCell className={"p-1 py-2"}>${juego.precioClienteTransferencia}</TableCell>
            <TableCell className={"p-1 py-2"}>${juego.precioClienteLista}</TableCell>
            <TableCell>
                <div className={"flex gap-4"}>
                    <Button size={"sm"} variant={"outline"} onClick={() => activarModoEdicion(juego)}>
                        <Pen/>
                    </Button>
                </div>
            </TableCell>
        </>
    )
}

const CamposEdicion = ({juego, cancelar, guardar, eliminar}) => {
    const [datosForm, setDatosForm] = useState({
        price: juego.price,
        precioReventa: juego.precioReventa,
        precioClienteLista: juego.precioClienteLista,
        precioClienteTransferencia: juego.precioClienteTransferencia,
        id: juego.id
    })

    const realizarCambio = (e) => {
        console.log(`Cambio ${e.target.name} | valor ${e.target.value}`)
        setDatosForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    return (
        <>
            <TableCell>
                <Input
                    type={"text"}
                    name={"price"}
                    defaultValue={juego.price}
                    onChange={(e) => realizarCambio(e)}
                />
            </TableCell>
            <TableCell>
                <Input
                    type={"text"}
                    name={"precioReventa"}
                    defaultValue={juego.precioReventa}
                    onChange={(e) => realizarCambio(e)}
                />
            </TableCell>
            <TableCell>
                <Input
                    type={"text"}
                    name={"precioClienteLista"}
                    defaultValue={juego.precioClienteLista}
                    onChange={(e) => realizarCambio(e)}
                />
            </TableCell>
            <TableCell>
                <Input
                    type={"text"}
                    name={"precioClienteTransferencia"}
                    defaultValue={juego.precioClienteTransferencia}
                    onChange={(e) => realizarCambio(e)}
                />
            </TableCell>
            <TableCell>
                <div className={"flex gap-4"}>
                    <Button size={"sm"} variant={"outline"} onClick={() => guardar(datosForm)}>
                        <SaveIcon/>
                    </Button>
                    <Button size={"sm"} variant={"outline"} onClick={() => eliminar(juego.id)}>
                        <Trash/>
                    </Button>
                    <Button size={"sm"} variant={"outline"} onClick={() => cancelar(juego.id)}>
                        <FcCancel/>
                    </Button>
                </div>
            </TableCell>
        </>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"px-2 md:px-4"}>Juego</TableHead>
                <TableHead className={"px-2 md:px-4"}>P.N</TableHead>
                <TableHead className={"px-2 md:px-4"}>P.R</TableHead>
                <TableHead className={"px-2 md:px-4"}>P.C.T</TableHead>
                <TableHead className={"px-2 md:px-4"}>P.C.L</TableHead>
                <TableHead className={"px-2 md:px-4"}>Acción</TableHead>
            </TableRow>
        </TableHeader>
    )
}
