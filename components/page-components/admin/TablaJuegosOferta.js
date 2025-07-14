"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Check, Copy, Pen, Plus, SaveIcon, Trash} from "lucide-react";
import {Button} from "@/components/ui/button";
import useModoEdicionPorFila from "@/components/custom-hooks/useEditarFila";
import {FcCancel} from "react-icons/fc";
import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {
    actualizarEstadoOferta,
    actualizarOfertas,
    actualizarOfertasNavegador,
    eliminarJuegoOfertaNavegador,
    obtenerJuegosOfertaCliente
} from "@/dominio/servicios/juegos";
import {toastError, toastSuccess} from "@/lib/Toast";
import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card"
import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";
import CambiadorEstadoOferta from "@/app/(modules)/admin/(components)/juegos/ofertas/CambiadorEstadoOferta";
import SelectorPrioridad from "@/app/(modules)/admin/(components)/juegos/ofertas/SelectorPrioridad";

function TablaJuegosOfertaAdmin({ofertas}) {
    const {
        items: juegos,
        editar,
        reemplazarTodos,
        cancelar,
        actualizarItem,
        eliminarItem,
        cambiarModoEdicionItem
    } = useModoEdicionPorFila(ofertas.juegos);

    const [quiereAgrear, setQuiereAgregar] = useState(false)
    const [estaActivo, setEstaActivo] = useState(ofertas.estaActiva)

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
    })

    const cambiarDestacado = async (juego) => {
        const itemsActualizados = actualizarItem(juego)
        const resultado = await actualizarOfertasNavegador({...ofertas, juegos: itemsActualizados, accion: 0});
        if (resultado.exito) {
            return toastSuccess("Listado actualizado correctamante.")
        }
        return toastError("No se pudo actualizar las ofertas.")
    }

    const handleAddProduct = async () => {
        if (newProduct.name.trim() === "" || newProduct.price === "") return

        const juegoNuevo = {
            name: newProduct.name,
            price: Number(newProduct.price),
        }

        const resultado = await actualizarOfertasNavegador({...ofertas, juegos: juegos, nuevo: juegoNuevo});
        if (!resultado.exito) {
            setQuiereAgregar(false)
            return toastError("No se pudo agregar.")
        }

        const resultadoDos = await obtenerJuegosOfertaCliente()
        if (!resultadoDos.exito) {
            setQuiereAgregar(false)
            return toastError("No se pudo agregar.")
        }

        reemplazarTodos(resultadoDos.data.juegos)
        setQuiereAgregar(false)
    }

    const actualizarJuego = async (datosForm) => {
        const itemsActualizados = actualizarItem(datosForm)
        const resultado = await actualizarOfertasNavegador({...ofertas, juegos: itemsActualizados});
        if (resultado.exito) {
            return toastSuccess("Listado actualizado correctamante.")
        }
        cambiarModoEdicionItem(datosForm.id)
        return toastError("No se pudo actualizar las ofertas.")
    }

    const eliminarJuego = async (id) => {
        eliminarItem(id)
        const resultado = await eliminarJuegoOfertaNavegador(id, ofertas.id);
        if (resultado.exito) {
            return toastSuccess("Juego eliminado correctamante.")
        }
        cambiarModoEdicionItem(id)
        return toastError("No se pudo eliminar el juego de oferta")
    }

    const cuerpoProps = {
        juegos, editar, cancelar, actualizarItem, actualizarJuego, eliminarJuego, cambiarDestacado
    }

    const cambiadorEstadoOfertaProps = {
        estaActivo,
        setEstaActivo,
        ofertaId: ofertas.id,
    }

    return (
        <>
            <p className={"italic"}>Ofertas disponibles {juegos.length}</p>
            <div className={"flex flex-col gap-4"}>
                <div
                    className="flex flex-col gap-2 space-y-2 sm:space-y-0 mb-4">
                    <Button onClick={() => setQuiereAgregar(true)} className={"w-fit"}>
                        <Plus className="mr-2 h-4 w-4"/>
                        Agregar juego
                    </Button>
                    <CambiadorEstadoOferta {...cambiadorEstadoOfertaProps} />
                    {ofertas.estaActiva &&
                        <SelectorPrioridad oferta={ofertas}/>
                    }
                </div>

                {quiereAgrear &&
                    <Card className="mb-6">
                        <CardContent className="pt-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Nombre del Producto</Label>
                                    <Input
                                        id="name"
                                        placeholder="Ingrese nombre del producto"
                                        value={newProduct.name}
                                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="price">Precio</Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        placeholder="Ingrese precio"
                                        value={newProduct.price}
                                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-6">
                                <Button variant="outline" className="mr-2" onClick={() => setQuiereAgregar(false)}>
                                    Cancelar
                                </Button>
                                <Button onClick={handleAddProduct}>Guardar Producto</Button>
                            </div>
                        </CardContent>
                    </Card>
                }

                <Table>
                    <TableCaption>Juegos en oferta - Precios actualizados</TableCaption>
                    <Cabecera/>
                    <Cuerpo {...cuerpoProps}/>
                </Table>
            </div>
        </>
    )
}

export default TablaJuegosOfertaAdmin

const Cuerpo = ({juegos = [], editar, cancelar, actualizarJuego, actualizarItem, eliminarJuego, cambiarDestacado}) => {
    return (
        <TableBody>
            {juegos.map(j => (
                <Registro
                    juego={j}
                    key={j.id}
                    activarModoEdicion={editar}
                    cancelar={cancelar}
                    actualizarItem={actualizarItem}
                    actualizarJuego={actualizarJuego}
                    eliminar={eliminarJuego}
                    cambiarDestacado={cambiarDestacado}
                />))}
        </TableBody>
    )
}

const Registro = ({juego, activarModoEdicion, cancelar, actualizarJuego, eliminar, cambiarDestacado}) => {
    return (
        <TableRow className={`m-0 p-0 ${juego.esDestacado && "bg-green-200"}`}>
            {juego.modoEdicion ?
                <CamposEdicion cancelar={cancelar} juego={juego} guardar={actualizarJuego} eliminar={eliminar}/>
                :
                <CamposNormales juego={juego} activarModoEdicion={activarModoEdicion} cambiarDestacado={cambiarDestacado}/>
            }
        </TableRow>
    )
}

const CamposNormales = ({juego, activarModoEdicion, cambiarDestacado}) => {
    return (
        <>
            <TableCell className={`font-medium p-1 py-2`}>{juego.name}</TableCell>
            <TableCell className={`p-1 py-2`}>
                <div className={"flex justify-center items-center mx-auto"}>
                    <Switch
                        id="visible"
                        checked={juego?.esDestacado ?? false}
                        onCheckedChange={(checked) => cambiarDestacado({ ...juego, esDestacado: checked })}
                    />
                </div>
            </TableCell>
            <TableCell className={`p-1 py-2`}>${juego.price}</TableCell>
            <TableCell className={`p-1 py-2`}>${juego.precioReventa}</TableCell>
            <TableCell className={`p-1 py-2`}>${juego.precioClienteTransferencia}</TableCell>
            <TableCell className={`p-1 py-2`}>${juego.precioClienteLista}</TableCell>
            <TableCell className={"p-1"}>
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
        id: juego.id,
        name: juego.name
    })

    const realizarCambio = (e) => {
        setDatosForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const campos = [
        {
            tipo: "text",
            name: "name",
            defaultValue: juego.name
        },
        {
            tipo: "text",
            name: "price",
            defaultValue: juego.price
        },
        {
            tipo: "text",
            name: "precioReventa",
            defaultValue: juego.precioReventa
        },
        {
            tipo: "text",
            name: "precioClienteLista",
            defaultValue: juego.precioClienteLista
        },
        {
            tipo: "text",
            name: "precioClienteTransferencia",
            defaultValue: juego.precioClienteTransferencia
        },
    ]

    return (
        <>
            {campos.map((campo, index) => (
                <TableCell key={index}>
                    <Input
                        type={campo.tipo}
                        name={campo.name}
                        defaultValue={campo.defaultValue}
                        onChange={(e) => realizarCambio(e)}
                    />
                </TableCell>
            ))}
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
                <TableHead className={"px-2 md:px-4 text-center"}>Destacado</TableHead>
                <TableHead className={"px-2 md:px-4"}>P.N</TableHead>
                <TableHead className={"px-2 md:px-4"}>P.R</TableHead>
                <TableHead className={"px-2 md:px-4"}>P.C.T</TableHead>
                <TableHead className={"px-2 md:px-4"}>P.C.L</TableHead>
                <TableHead className={"px-2 md:px-4"}>Acción</TableHead>
            </TableRow>
        </TableHeader>
    )
}
