"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Check, Copy, Pen, Trash2} from "lucide-react";
import ModalCustomizado from "@/components/personalized-ui/Modal";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {toastError, toastSuccess} from "@/lib/Toast";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {CardDescription} from "@/components/ui/card";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {actualizarJuegoStock, eliminarJuegoStock, recargarJuegosStock} from "@/dominio/servicios/stock-juegos";
import ModalEditarJuego from "@/components/page-components/admin/ModalEditarJuego";
import TablaJuegosStock from "@/components/page-components/admin/TablaJuegosStock";
import {formatearJuego} from "@/dominio/utils/juegos-stock/utils";
import {useStockStore} from "@/app/(modules)/admin/context/contextoJuego";
import ServicioJuegoStock from "@/app/(modules)/admin/context/ServicioJuegoStock";
import SmallSpinner from "@/app/(modules)/admin/(components)/SmallSpinner";
import {AiOutlineReload} from "react-icons/ai";

function TablaJuegosStockAdmin({juegos: j}) {
    const [modalEditarAbierto, setModalEditarAbierto] = useState(false)
    const [modalEliminarAbierto, setModalEliminarAbierto] = useState(false)
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null)
    const [juegosBusqueda, setJuegosBusqueda] = useState([])
    const [juegoBuscado, setJuegoBuscado] = useState("")

    const [estaCargando, setEstaCargando] = useState(false)

    const {juegos, setJuegos: st, eliminarJE} = useStockStore();

    useEffect(() => {
        st(j)
    }, [st, j])


    const buscarJuego = (e) => {
        if (e.target.value.length === 0) {
            setJuegosBusqueda([])
            setJuegoBuscado("")
        }
        const juegosFiltrados = ServicioJuegoStock.buscarJuegoEnArray([...juegos], e.target.value)
        setJuegoBuscado(e.target.value)
        setJuegosBusqueda(juegosFiltrados)
    }

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

    const eliminarLocal = (idJuego) => {
        return juegos.filter(s => s.id !== idJuego)
    }

    const actualizarLocal = (juegoActualizado) => {
        formatearJuego(juegoActualizado)
        const juegosActualizados = [...juegos].map((j) => {
            if (j.id === juegoActualizado.id) {
                return {
                    ...j,
                    ...juegoActualizado
                }
            }
            return j;
        })
        setJuegos(juegosActualizados)
    }

    const manejarEliminarJuego = async () => {
        if (!juegoSeleccionado.id) return toastError("No se pudo eliminar el PlayStation Plus")
        const {mensaje, exito} = await eliminarJuegoStock(juegoSeleccionado.id)
        if (exito) {
            eliminarJE(juegoSeleccionado.id)
            toastSuccess(mensaje)
        } else {
            toastError(mensaje)
        }
        manejarModalEliminar()
    }

    const tablaProps = {
        eliminarJuego,
        editarJuego,
        juegos: juegosBusqueda.length > 0 ? juegosBusqueda : juegos
    }

    const modalEditarProps = {
        estaAbierto: modalEditarAbierto,
        manejarModalEditar,
        juegoSeleccionado,
        actualizarLocal
    }

    const modalEliminarProps = {
        estaAbierto: modalEliminarAbierto,
        manejarModalEliminar,
        juegoSeleccionado,
        manejarEliminarJuego
    }

    const recargar = async () => {
        setEstaCargando(true)
        const resultado = await recargarJuegosStock()
        console.log("respuesta server", resultado)
        if (resultado.exito) {
            st(resultado.data)
            setEstaCargando(false)
            toastSuccess("Recarga realizada correctamante.")
        } else {
            toastError(resultado.mensaje)
        }
    }

    return (
        <>
            <p>Cantidad juegos actual: {juegos.length ?? 0}</p>
            <Button onClick={recargar} disabled={estaCargando}>
                {estaCargando ? <SmallSpinner /> : <AiOutlineReload/>}
            </Button>
            <ModalEliminar {...modalEliminarProps}/>
            <ModalEditarJuego {...modalEditarProps}/>
            <Input
                onChange={buscarJuego}
                placeholder={"Buscar por nombre de juego"}
                className={"w-full my-3"}
            />
            {juegoBuscado &&
                <p className={"py-3 text-sm text-gray-600"}>Se muestran resultados para: {juegoBuscado}</p>}
            <TablaJuegosStock {...tablaProps}/>
        </>)
}

const ModalEliminar = ({estaAbierto, manejarEliminarJuego, manejarModalEliminar}) => {
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
                    onClick={() => manejarEliminarJuego()}
                >
                    Eliminar
                </Button>
            </div>
        </ModalCustomizado>
    )
}


export default TablaJuegosStockAdmin;