"use client"

import {Plus} from "lucide-react";
import {useState} from "react";
import {actualizarTarjeta, agregarTarjeta as guardarTarjeta, eliminarTarjeta} from "@/dominio/servicios/giftcards";
import {toastError, toastSuccess} from "@/lib/Toast";
import {Button} from "@/components/ui/button";
import TablaTarjetas from "@/components/page-components/admin/tarjetas/TablaTarjetas";
import ModalAgregarTarjeta from "@/components/page-components/admin/tarjetas/ModalAgregarTarjeta";
import Link from "next/link";

const transformarDatos = (actualizado) => {
    return {
        ...actualizado,
        precioCliente: Number(actualizado.precioCliente),
        precioReventa: Number(actualizado.precioReventa),
    }
}

function TablaTarjetasRegaloAdmin({tarjetas: data}) {
    const [tarjetas, setTarjetas] = useState(data.map(d => ({...d, modoEdicion: false})))
    const [modalAgregarAbierto, setModalAgregarAbierto] = useState(false)

    const handleModal = () => setModalAgregarAbierto(prev => !prev);

    const tablaProps = {
        tarjetas,
        eliminar: async (id) => {
            const resultado = await eliminarTarjeta(id)
            if (resultado.exito) {
                toastSuccess("Tarjeta eliminada correctamante.")
                setTarjetas(prev => prev.map(p => p.id !== id))
            } else {
                toastError("No se pudo actualizar.")
            }
        },
        editar: (o) => {
            setTarjetas(prev => prev.map(p => (p.id === o.id ? {...p, modoEdicion: true} : p)))
        },
        guardar: async (datosForm) => {
            const tarjetaLista = transformarDatos(datosForm)
            const resultado = await actualizarTarjeta(tarjetaLista)
            if (resultado.exito) {
                toastSuccess("Tarjeta actualizada correctamante.")
                setTarjetas(prev =>
                    prev.map(p => p.id === datosForm.id ? ({...p, ...tarjetaLista, modoEdicion: false}) : p))
            } else {
                toastError("No se pudo actualizar.")
            }
        },
        cancelar: (id) => {
            setTarjetas(prev => prev.map(p => (p.id === id ? {...p, modoEdicion: false} : p)))
        },
    }

    const agregarTarjeta = async (datosForm) => {
        const tarjetaLista = transformarDatos(datosForm)
        const resultado = await guardarTarjeta(tarjetaLista)
        if (resultado.exito) {
            toastSuccess("Tarjeta guardada correctamante.")
            setTarjetas(prev => ([...prev, {...datosForm, id: resultado.id, modoEdicion: false}]))
        } else {
            toastError("No se pudo guardar.")
        }
    }

    const modalAgregarProps = {
        agregar: agregarTarjeta,
        estaAbierto: modalAgregarAbierto,
        handleModal
    }

    return (
        <>
            <div className={"flex justify-between items-center relative mb-4"}>
                <h1 className="text-xl md:text-2xl font-bold text-center w-fit self-center">
                    Tarjetas de regalo
                </h1>
                <Link href={"/admin/giftcards/agregar"} passHref>
                    <Button asChild>
                        Agregar
                    </Button>
                </Link>
            </div>
            <ModalAgregarTarjeta {...modalAgregarProps}/>
            <div className={"w-full"}>
                <TablaTarjetas {...tablaProps}/>
            </div>
        </>
    )
}

export default TablaTarjetasRegaloAdmin


