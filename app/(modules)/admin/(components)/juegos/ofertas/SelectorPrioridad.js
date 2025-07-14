"use client"

import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import SmallSpinner from "@/app/(modules)/admin/(components)/SmallSpinner";
import {actualizarPrioridadOferta} from "@/dominio/servicios/juegos";
import {toastError} from "@/lib/Toast";
import {FaRegSave} from "react-icons/fa";

const priorities = [1, 2, 3, 4, 5]

function SelectorPrioridad({oferta}) {
    const [selectedPriority, setSelectedPriority] = useState(oferta?.prioridad)
    const [estaCargando, setEstaCargando] = useState(false)

    const actualizarPrioridad = async () => {

        if (!oferta.estaActiva) {
            setSelectedPriority(undefined)
            return toastError("No podes asignar prioridad a una oferta inactiva.")
        }

        try {
            setEstaCargando(true)
            await actualizarPrioridadOferta(oferta.id, selectedPriority)
            window.location.reload()
        } catch (e) {
            console.log(e)
        } finally {
            setEstaCargando(false)
        }
    }

    const cambiarSelectPrioridad = (prioridadNueva) => {
        if (!prioridadNueva) return;
        if (!oferta.estaActiva) {
            setSelectedPriority(undefined)
            return toastError("No podes asignar prioridad a una oferta inactiva.")
        }
        setSelectedPriority(prioridadNueva)
    }

    return (
        <div className="space-y-2 w-6/12">
            <Label htmlFor="priority-select">Nivel de Prioridad</Label>
            <div className="flex gap-2">
                <Select value={selectedPriority ?? undefined} onValueChange={cambiarSelectPrioridad}>
                    <SelectTrigger id="priority-select">
                        <SelectValue placeholder="Selecciona una prioridad"/>
                    </SelectTrigger>
                    <SelectContent>
                        {priorities.map((p) => (
                            <SelectItem key={p} value={p}>
                                <div className="flex items-center gap-2">
                                    {p}
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button
                    disabled={estaCargando}
                    onClick={() => actualizarPrioridad()}
                >
                    {estaCargando ? (<SmallSpinner/>) : (<FaRegSave/>)}
                </Button>
            </div>

        </div>
    )
}

export default SelectorPrioridad;