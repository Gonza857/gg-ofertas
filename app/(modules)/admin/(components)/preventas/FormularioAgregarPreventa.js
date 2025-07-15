"use client"

import {Controller, useForm} from "react-hook-form";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {actualizarPreventa, crearPreventa} from "@/dominio/servicios/preventas";
import {useRouter} from "next/navigation";
import {toastError, toastSuccess} from "@/lib/Toast";
import {useEffect} from "react";

const validaciones = {
    titulo: {
        required: true
    },
    fechaLanzamiento: {
        required: true
    },
    precioBase: {
        required: true,
        valueAsNumber: true
    },
    precioClienteLista: {
        required: true,
        valueAsNumber: true
    },
    precioClienteTransferencia: {
        required: true,
        valueAsNumber: true
    },
    precioReventa: {
        required: true,
        valueAsNumber: true
    },
    region: {
        required: true
    }
}

function FormularioAgregarPreventa({item = null}) {
    const {
        register,
        handleSubmit,
        formState: {errors},
        control,
        reset
    } = useForm({
        defaultValues: {
            plataforma: "PS4/PS5",
        },
    })

    const router = useRouter();

    useEffect(() => {
        console.log("item recibido", item)
        if (item) {
            reset({
                titulo: item.titulo,
                fechaLanzamiento: item.fechaLanzamiento,
                precioBase: item.precioBase,
                precioReventa: item.precioReventa,
                precioClienteLista: item.precioClienteLista,
                precioClienteTransferencia: item.precioClienteTransferencia,
                plataforma: item.plataforma,
                region: item.region,
            });
        }
    }, [item, reset]);

    const guardarJuego = async (data) => {
        console.log('Datos del juego:', data)
        try {
            let resultado;
            if (item) {
                resultado = await actualizarPreventa(data, item?.id)
            } else {
                resultado = await crearPreventa(data);
            }
            toastSuccess(resultado.mensaje)
            router.push("/admin/juegos/preventas")
        } catch (e) {
            console.log("error")
            toastError(e)
        }

        // Acá podrías hacer fetch POST a tu backend
    }

    return (
        <>
            <form onSubmit={handleSubmit(guardarJuego)}
                  className="space-y-4 w-6/12 bor1 p-4 mx-auto"
            >
                <div className="space-y-2">
                    <Label htmlFor="titulo">Titulo</Label>
                    <Input
                        {...register('titulo', validaciones.titulo)}
                        name="titulo"
                        placeholder={"Nombre juego"}
                    />
                    {errors.titulo && <span className="text-red-500">Requerido</span>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="fechaLanzamiento">Fecha lanzamiento</Label>
                    <Input
                        {...register('fechaLanzamiento', validaciones.fechaLanzamiento)}
                        name="fechaLanzamiento"
                        placeholder={"01/01/2000 20hs ARG"}
                    />
                    {errors.fechaLanzamiento && <span className="text-red-500">Requerido</span>}
                </div>

                <div className={"grid grid-cols-2 gap-2"}>
                    <div className="space-y-2">
                        <Label htmlFor="precioBase">Precio Base</Label>
                        <Input
                            {...register('precioBase', validaciones.precioBase)}
                            name="precioBase"
                            placeholder={"1000"}
                        />
                        {errors.precioBase && <span className="text-red-500">Requerido</span>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="precioReventa">Precio Reventa</Label>
                        <Input
                            {...register('precioReventa', validaciones.precioReventa)}
                            name="precioReventa"
                            placeholder={"950"}
                        />
                        {errors.precioReventa && <span className="text-red-500">Requerido</span>}
                    </div>
                </div>

                <div className={"grid grid-cols-2 gap-2"}>
                    <div className="space-y-2">
                        <Label htmlFor="precioClienteTransferencia">Precio Cliente Transferencia</Label>
                        <Input
                            {...register('precioClienteTransferencia', validaciones.precioClienteTransferencia)}
                            name="precioClienteTransferencia"
                            placeholder={"1000"}
                        />
                        {errors.precioCLienteTransferencia && <span className="text-red-500">Requerido</span>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="precioClienteLista">Precio Cliente Lista</Label>
                        <Input
                            {...register('precioClienteLista', validaciones.precioClienteLista)}
                            name="precioClienteLista"
                            placeholder={"1200"}
                        />
                        {errors.precioClienteLista && <span className="text-red-500">Requerido</span>}
                    </div>
                </div>


                <Controller
                    name="plataforma"
                    control={control}
                    rules={{required: "Debes seleccionar una plataforma"}}
                    render={({field, fieldState}) => (
                        <div className="space-y-1">
                            <label className="block text-sm font-medium">Plataforma</label>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona una plataforma"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="PS4">PS4</SelectItem>
                                    <SelectItem value="PS5">PS5</SelectItem>
                                    <SelectItem value="PS4/PS5">PS4/PS5</SelectItem>
                                </SelectContent>
                            </Select>
                            {fieldState.error && (
                                <p className="text-sm text-red-500">{fieldState.error.message}</p>
                            )}
                        </div>
                    )}
                />

                <Controller
                    name="region"
                    control={control}
                    rules={{required: "Debes seleccionar una region"}}
                    render={({field, fieldState}) => (
                        <div className="space-y-1">
                            <label className="block text-sm font-medium">Región</label>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona una plataforma"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="USA">Estados Unidos</SelectItem>
                                    <SelectItem value="TK">Turquia</SelectItem>
                                    <SelectItem value="ARG">Argentina</SelectItem>
                                </SelectContent>
                            </Select>
                            {fieldState.error && (
                                <p className="text-sm text-red-500">{fieldState.error.message}</p>
                            )}
                        </div>
                    )}
                />

                <Button type="submit">
                    {item ? "Actualizar juego" : "Crear juego"}
                </Button>
            </form>
        </>
    )
}

export default FormularioAgregarPreventa;