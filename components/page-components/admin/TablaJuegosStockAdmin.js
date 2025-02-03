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

function TablaJuegosStockAdmin({juegos: j}) {
    const [juegos, setJuegos] = useState(j)
    const [modalEditarAbierto, setModalEditarAbierto] = useState(false)
    const [modalEliminarAbierto, setModalEliminarAbierto] = useState(false)
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null)

    const manejarModalEditar = (juego = null) => {
        if (modalEditarAbierto) {
            setModalEditarAbierto(false)
            setJuegoSeleccionado(null)
        } else {
            setModalEditarAbierto(true)
            setJuegoSeleccionado(juego)
        }
    };

    const manejarModalEliminar = (plus = null) => {
        if (modalEliminarAbierto) {
            setModalEliminarAbierto(false)
            setJuegoSeleccionado(null)
        } else {
            setModalEliminarAbierto(true)
            setJuegoSeleccionado(plus)
        }
    };


    const eliminarJuego = (juego) => manejarModalEliminar(juego)
    const editarJuego = (juego) => manejarModalEditar(juego)

    const eliminarLocal = (idPlus) => {
        return juegos.filter(s => s.id !== idPlus)
    }

    const manejarEliminarJuego = async () => {
        if (!juegoSeleccionado.id) return toastError("No se pudo eliminar el PlayStation Plus")
        const {mensaje, exito} = await eliminarMembresia(juegoSeleccionado.id)
        setJuegos(eliminarLocal(juegoSeleccionado.id))
        manejarModalEliminar()
        if (exito) return toastSuccess(mensaje)
        toastError(mensaje)
    }

    const tablaProps = {
        eliminarJuego,
        editarJuego,
        juegos
    }

    const modalEditarProps = {
        estaAbierto: modalEditarAbierto,
        manejarModalEditar,
        juegoSeleccionado
    }

    const modalEliminarProps = {
        estaAbierto: modalEliminarAbierto,
        manejarModalEliminar,
        juegoSeleccionado,
        manejarEliminarJuego
    }

    return (
        <>
            <ModalEliminar {...modalEliminarProps}/>
            <ModalEditar {...modalEditarProps}/>
            <Tabla {...tablaProps}/>
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
            <ModalCustomizado.Titulo>¿Deseas eliminar este juego?</ModalCustomizado.Titulo>
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

const ModalEditar = ({estaAbierto, manejarModalEditar, juegoSeleccionado = null}) => {
    const [datosFormulario, setDatosFormulario] = useState({...juegoSeleccionado});

    if (!juegoSeleccionado) return;

    const enviarFormulario = async (e) => {
        e.preventDefault()
        const {mensaje, exito} = await actualizarPlus({...juegoSeleccionado, ...datosFormulario});
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
            <ModalCustomizado.Titulo>{juegoSeleccionado.id}</ModalCustomizado.Titulo>
            <form className={"space-y-4"} onSubmit={enviarFormulario}>
                <div>
                    <Label>Selecciona el tipo de PlayStation Plus</Label>
                    <Select
                        onValueChange={(valor) => manejarSelect("tipo", valor)}
                        name="tipo"
                        defaultValue={juegoSeleccionado.tipo}
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
                            defaultValue={juegoSeleccionado.slotsPs4}
                        />
                    </div>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"slotsPs5"}>Slots PS5</Label>
                        <Input
                            name={"slotsPs5"}
                            type={"number"}
                            onChange={manejarCampos}
                            placeholder={"777"}
                            defaultValue={juegoSeleccionado.slotsPs5}
                        />
                    </div>
                </div>
                <InputWrapper>
                    <Label>Ingrese el costo total</Label>
                    <Input
                        name={"costo"}
                        type={"number"}
                        onChange={manejarCampos}
                        defaultValue={juegoSeleccionado.costo}
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
            <TableCell className={"p-1 py-2 text-center"}>{j.precioCliente}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.precioReventa}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.consola}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.tipo}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.mostrarIdioma ? "Sí" : "No"}</TableCell>
            <TableCell className={"p-1 py-2 text-center"}>{j.idioma}</TableCell>
            <TableCell className={"p-1 text-center"}>
                <Pen
                    className="h-4 w-4 mx-auto"
                    onClick={() => editarJuego(j)}
                />
            </TableCell>
            <TableCell className={"p-1 text-center"}>
                <Trash2
                    className="h-4 w-4 mx-auto"
                    onClick={() => eliminarJuego(j)}
                />
            </TableCell>
        </TableRow>
    )
}

export default TablaJuegosStockAdmin;