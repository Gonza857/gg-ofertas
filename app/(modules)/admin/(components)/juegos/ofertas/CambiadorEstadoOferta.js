"use client"

import {actualizarEstadoOferta} from "@/dominio/servicios/juegos";
import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";
import {useState} from "react";

function CambiadorEstadoOferta ({ofertaId, estaActivo, setEstaActivo}) {
    const [estaCargando, setEstaCargando] = useState(false)

    const cambiarEstadoOferta = async (estadoNuevo) => {
        setEstaCargando(true)
        try {
            await actualizarEstadoOferta(ofertaId, estadoNuevo)
            window.location.reload()
            setEstaActivo(estadoNuevo)
        } catch (e) {

        } finally {
            setEstaCargando(false)
        }
    }

    return (
        <div className={"flex items-center space-x-2"}>
            <Label htmlFor="visibility-mode" className="text-sm font-medium">
                {estaActivo ? "Activa" : "No activa"}
            </Label>
            <Switch id="visibility-mode"
                    checked={estaActivo}
                    onCheckedChange={cambiarEstadoOferta}
            />
            {estaCargando && (
                <div className="flex items-center ml-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-blue-600"></div>
                </div>
            )}
        </div>
    )
}

export default CambiadorEstadoOferta