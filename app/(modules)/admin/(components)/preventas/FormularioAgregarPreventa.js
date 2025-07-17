"use client"

import {Controller, useForm} from "react-hook-form";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {actualizarPreventa, crearPreventa} from "@/dominio/servicios/preventas";
import {useRouter} from "next/navigation";
import {toastError, toastSuccess} from "@/lib/Toast";
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Plus, Trash} from "lucide-react";

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
    },
    tipo: {
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
            precioReventa: null,
            plataforma: item.plataforma ?? null,
            region: item.region ?? null,
            tipo: item.tipo ?? null
        },
    })

    const [itemImage, setItemImage] = useState(item?.imagenUrl ?? null)
    const [imagenPreview, setImagenPreview] = useState(null)
    const [image64, setImage64] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [imageState, setImageState] = useState(item?.imagenUrl ? 1 : 0)


    const router = useRouter();

    useEffect(() => {
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
                tipo: item?.tipo
            });
        }
    }, [item, reset]);

    const handleImagenChange = async (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage64(file)
                setImagenPreview(reader.result)
                setImageState(3)
            }
            reader.readAsDataURL(file)
        }
    }

    const eliminarImagenItem = () => {
        setItemImage(null)
        setImageState(2)
    }

    const guardarJuego = async (data) => {
        setIsSubmitting(true)

        const formData = new FormData()
        for (const key in {...data}) {
            formData.append(key, data[key]);
        }

        if (imageState === 3) {
            formData.append("imagen", image64, "img")
            formData.append("estadoImagen", imageState.toString())
        }

        // if (imageState === 0) console.log("vino sin, se va sin")
        // if (imageState === 1) console.log("vino con, se va con la misma")
        // if (imageState === 2) console.log("elimino la que tenia pero no cargó")
        // if (imageState === 3) console.log("cargo una nueva, no se si tenia o la eliminó")


        try {
            let resultado;
            if (item) {
                formData.append("id", item.id)
                resultado = await actualizarPreventa(formData, item.id)
            } else {
                resultado = await crearPreventa(formData);
            }
            toastSuccess(resultado.mensaje)
            router.push("/admin/juegos/preventas")
        } catch (e) {
            console.log("error")
            toastError(e)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(guardarJuego)}
                  className="space-y-4 w-full p-4 mx-auto"
            >
                <div className="grid gap-6 md:grid-cols-2">

                    <Card>
                        <CardHeader>
                            <CardTitle>Información básica</CardTitle>
                            <CardDescription>Detalles principales de preventa</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
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
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Precios</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
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
                                    {errors.precioCLienteTransferencia &&
                                        <span className="text-red-500">Requerido</span>}
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
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Detalles</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
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
                                rules={{required: "Debes seleccionar una región"}}
                                render={({field, fieldState}) => (
                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium">Región</label>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona una región"/>
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

                            <Controller
                                name="tipo"
                                control={control}
                                rules={{required: "Debes seleccionar un tipo de cuenta"}}
                                render={({field, fieldState}) => (
                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium">Tipo de cuenta</label>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona una región"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Primaria">Primaria</SelectItem>
                                                <SelectItem value="Secundaria">Secundaria</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {fieldState.error && (
                                            <p className="text-sm text-red-500">{fieldState.error.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </CardContent>
                    </Card>


                    <Card>
                        <CardHeader>
                            <CardTitle>Imagen</CardTitle>
                            <CardDescription>(Formato 1:1 recomendado para mejor visualización)</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid place-items-center border-2 border-dashed rounded-md p-4">
                                    {imagenPreview ? (
                                        <PreviewImagen
                                            imagenPreview={imagenPreview}
                                            setImagenPreview={setImagenPreview}
                                        />
                                    ) : (

                                        <div className="text-center py-8">
                                            {itemImage ?
                                                <ItemImage
                                                    image={itemImage}
                                                    quitarImagenProducto={eliminarImagenItem}
                                                />
                                                :
                                                <>
                                                    <input
                                                        type="file"
                                                        id="imagen"
                                                        className="hidden"
                                                        accept="image/*"
                                                        onChange={handleImagenChange}
                                                    />
                                                    <Label
                                                        htmlFor="imagen"
                                                        className="flex flex-col items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground"
                                                    >
                                                        <div
                                                            className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                                                            <Plus className="h-6 w-6"/>
                                                        </div>
                                                        <span>Haz clic para subir una imagen</span>
                                                        <span className="text-xs">PNG, JPG o GIF (máx. 2MB)</span>
                                                    </Label>
                                                </>
                                            }

                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Button type="submit">
                        {item ? "Actualizar juego" : "Crear juego"}
                    </Button>

                </div>

            </form>
        </>
    )
}

const PreviewImagen = ({imagenPreview, setImagenPreview}) => {
    return (
        <div className="relative w-full">
            <img
                src={imagenPreview || "/placeholder.svg"}
                alt="Vista previa"
                className="mx-auto max-h-[200px] object-contain rounded-md"
            />
            <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => setImagenPreview(null)}
            >
                <Trash className="h-4 w-4"/>P
            </Button>
        </div>
    )
}

const ItemImage = ({image, quitarImagenProducto}) => {
    return (
        <div className="relative w-full">
            <img
                src={image}
                alt="Imagen producto"
                className="mx-auto max-h-[200px] object-contain rounded-md"
            />
            <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => quitarImagenProducto()}
            >
                <Trash className="h-4 w-4"/>A
            </Button>
        </div>
    )
}

export default FormularioAgregarPreventa;