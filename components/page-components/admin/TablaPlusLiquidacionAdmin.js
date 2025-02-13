"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useCopiarAlPortapapeles} from "@/hooks/useCopyToClipboard";
import {Badge} from "@/components/ui/badge";
import {Check, Copy, Pen, Trash2} from "lucide-react";
import ModalCustomizado from "@/components/personalized-ui/Modal";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {toastError, toastSuccess} from "@/lib/Toast";
import {actualizarPlus, eliminarPlus as eliminarMembresia} from "@/dominio/servicios/playstationplus";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {CardDescription} from "@/components/ui/card";
import Link from "next/link";

function TablaPlusLiquidacionAdmin({subscripciones: s}) {
    const [subscripciones, setSubscripciones] = useState(s)
    const [modalEditarAbierto, setModalEditarAbierto] = useState(false)
    const [modalEliminarAbierto, setModalEliminarAbierto] = useState(false)
    const [plusSeleccionado, setPlusSeleccionado] = useState(null)

    const manejarModalEditar = (plus = null) => {
        if (modalEditarAbierto) {
            setModalEditarAbierto(false)
            setPlusSeleccionado(null)
        } else {
            setModalEditarAbierto(true)
            setPlusSeleccionado(plus)
        }
    };

    const manejarModalEliminar = (plus = null) => {
        if (modalEliminarAbierto) {
            setModalEliminarAbierto(false)
            setPlusSeleccionado(null)
        } else {
            setModalEliminarAbierto(true)
            setPlusSeleccionado(plus)
        }
    };


    const eliminarPlus = (plus) => manejarModalEliminar(plus)
    const editarPlus = (plus) => manejarModalEditar(plus)

    const eliminarLocal = (idPlus) => {
        return subscripciones.filter(s => s.id !== idPlus)
    }

    const manejarEliminarPlus = async () => {
        if (!plusSeleccionado.id) return toastError("No se pudo eliminar el PlayStation Plus")
        const {mensaje, exito} = await eliminarMembresia(plusSeleccionado.id)
        setSubscripciones(eliminarLocal(plusSeleccionado.id))
        manejarModalEliminar()
        if (exito) return toastSuccess(mensaje)
        toastError(mensaje)
    }

    const tablaProps = {
        eliminarPlus,
        editarPlus,
        subscripciones
    }

    const modalEditarProps = {
        estaAbierto: modalEditarAbierto,
        manejarModalEditar,
        plusSeleccionado
    }

    const modalEliminarProps = {
        estaAbierto: modalEliminarAbierto,
        manejarModalEliminar,
        plusSeleccionado,
        manejarEliminarPlus
    }

    return (
        <>
            <ModalEliminar {...modalEliminarProps}/>
            <ModalEditar {...modalEditarProps}/>
            <Tabla {...tablaProps}/>
            <Link href={"/admin/stock/playstationplus-liquidacion/agregar"}>
                <Button className={"w-full mt-2"} variant={"outline"}>
                    Agregar
                </Button>
            </Link>
        </>)
}

const InputWrapper = ({children}) => {
    return (
        <div className={"space-y-2"}>{children}</div>
    )
}

const ModalEliminar = ({estaAbierto, manejarEliminarPlus, manejarModalEliminar}) => {
    return (
        <ModalCustomizado estaAbierto={estaAbierto}>
            <ModalCustomizado.Titulo>¿Deseas eliminar este PlayStataion Plus?</ModalCustomizado.Titulo>
            <CardDescription>Esta acción no se puede deshacer.</CardDescription>
            <div className={"flex justify-end gap-4 w-full"}>
                <Button
                    type={"button"}
                    variant={"destructive"}
                    onClick={() => manejarModalEliminar()}
                >
                    Cancelar
                </Button>
                <Button
                    type={"button"}
                    onClick={() => manejarEliminarPlus()}
                >
                    Eliminar
                </Button>
            </div>
        </ModalCustomizado>
    )
}

const ModalEditar = ({estaAbierto, manejarModalEditar, plusSeleccionado = null}) => {
    const [datosFormulario, setDatosFormulario] = useState({...plusSeleccionado});

    if (!plusSeleccionado) return;

    const enviarFormulario = async (e) => {
        e.preventDefault()
        const {mensaje, exito} = await actualizarPlus({...plusSeleccionado, ...datosFormulario});
        manejarModalEditar()
        if (exito) return toastSuccess(mensaje);
        return toastError(mensaje);
    }

    const manejarCampos = (e) => {
        setDatosFormulario((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const manejarSelect = (campo, valor) => setDatosFormulario((prev) => ({...prev, [campo]: valor}))

    return (
        <ModalCustomizado estaAbierto={estaAbierto}>
            <ModalCustomizado.Titulo>{plusSeleccionado.id}</ModalCustomizado.Titulo>
            <form className={"space-y-4"} onSubmit={enviarFormulario}>
                <div>
                    <Label>Selecciona el tipo de PlayStation Plus</Label>
                    <Select
                        onValueChange={(valor) => manejarSelect("tipo", valor)}
                        name="tipo"
                        defaultValue={plusSeleccionado.tipo}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Elige una opción"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Essential">Essential</SelectItem>
                            <SelectItem value="Extra">Extra</SelectItem>
                            <SelectItem value="Deluxe">Deluxe</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className={"grid grid-cols-2 gap-4"}>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"slotsPs4"}>Slots PS4</Label>
                        <Input
                            name={"slotsPs4"}
                            type={"number"}
                            onChange={manejarCampos}
                            placeholder={"777"}
                            defaultValue={plusSeleccionado.slotsPs4}
                        />
                    </div>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"slotsPs5"}>Slots PS5</Label>
                        <Input
                            name={"slotsPs5"}
                            type={"number"}
                            onChange={manejarCampos}
                            placeholder={"777"}
                            defaultValue={plusSeleccionado.slotsPs5}
                        />
                    </div>
                </div>
                <InputWrapper>
                    <Label>Ingrese el costo total</Label>
                    <Input
                        name={"costo"}
                        type={"number"}
                        onChange={manejarCampos}
                        defaultValue={plusSeleccionado.costo}
                    />
                </InputWrapper>
                <div className={"flex justify-end gap-4 w-full"}>
                    <Button
                        type={"button"}
                        variant={"destructive"}
                        onClick={() => manejarModalEditar()}
                    >
                        Cerrar
                    </Button>
                    <Button
                        type={"submit"}
                    >
                        Enviar
                    </Button>
                </div>
            </form>

        </ModalCustomizado>
    )
}

const Tabla = (props) => {
    return (
        <Table>
            <TableCaption>PlayStation Plus en liquidación - Precios actualizados</TableCaption>
            <Cabecera/>
            <Cuerpo {...props}/>
        </Table>
    )
}

const Cabecera = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className={"w-4/12 px-2 md:px-4"}>Membresia</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Días restantes</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Consola</TableHead>
                <TableHead className={"w-2/12 px-2 md:px-4 text-center"}>Precio</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Editar</TableHead>
                <TableHead className={"w-1/12 px-2 md:px-4 text-center"}>Eliminar</TableHead>
            </TableRow>
        </TableHeader>
    )
}

const Cuerpo = ({subscripciones, editarPlus, eliminarPlus}) => {
    return (
        <TableBody>
            {subscripciones.map(p => (
                <Registro
                    plus={p}
                    key={p.id}
                    editarPlus={editarPlus}
                    eliminarPlus={eliminarPlus}
                />))
            }
        </TableBody>
    )
}

const saberDuracion = {
    30: "1 mes",
    90: "3 meses",
    365: "12 meses"
}

const diccionarioTipos = {
    "essential": "bg-gray-300 text-black",
    "extra": "bg-yellow-500 text-black",
    "deluxe": "bg-gray-800 text-yellow-500"
}

const Registro = ({plus, editarPlus, eliminarPlus}) => {
    const meses = saberDuracion[plus.duracion]
    const consola = `${plus.slotsPs4 > 0 ? "PS4" : ""} ${(plus.slotsPs4 > 0 && plus.slotsPs5 > 0) ? "/" : ""} ${plus.slotsPs5 > 0 ? "PS5" : ""}`
    return (
        <TableRow>
            <TableCell className={"p-1 py-2 flex items-center"}>
                <Badge className={`${diccionarioTipos[plus.tipo.toLowerCase()]} mx-1 md:mx-2 h-6`}>
                    {plus.tipo}
                </Badge>
                <span>{meses}</span>
            </TableCell>

            <TableCell className={"p-1 text-center"}>{plus.diasRestantes}</TableCell>
            <TableCell className={"p-1 text-center"}>{consola}</TableCell>
            <TableCell className={"p-1 text-center"}>${plus.costo}</TableCell>
            <TableCell className={"p-1 text-center"}>
                <Pen
                    className="h-4 w-4 mx-auto"
                    onClick={() => editarPlus(plus)}
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Trash2
                    className="h-4 w-4 mx-auto"
                    onClick={() => eliminarPlus(plus)}
                />
            </TableCell>
        </TableRow>
    )
}

export default TablaPlusLiquidacionAdmin;