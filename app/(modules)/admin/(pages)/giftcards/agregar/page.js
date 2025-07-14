"use client"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Switch} from "@/components/ui/switch";
import {Plus, Save, Trash} from "lucide-react";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {toastError, toastSuccess} from "@/lib/Toast";
import {useForm} from "react-hook-form";
import {agregarTarjeta as guardarTarjeta} from "@/dominio/servicios/giftcards";
import GestorImagen from "@/infraestructura/GestorImagen";

const transformarDatos = (actualizado) => {
    return {
        ...actualizado,
        precioCliente: Number(actualizado.precioCliente),
        precioReventa: Number(actualizado.precioReventa),
    }
}


function Agregar() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [imagenPreview, setImagenPreview] = useState(null)
    const [plataforma, setPlataforma] = useState("");
    const [mostrarCliente, setMostrarCliente] = useState(false);
    const [image64, setImage64] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        defaultValues: {
            nombre: "",
            region: "",
            precioCliente: "",
            precioReventa: "",
            mostrarCliente: true,
            descripcion: "",
        },
    })

    useEffect(() => {
        console.log(image64)
    }, [image64]);

    const handleImagenChange = async (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage64(file)
                setImagenPreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        const tarjetaLista = transformarDatos(data)

        const formData = new FormData()
        for (const key in {...tarjetaLista, plataforma, mostrarCliente}) {
            formData.append(key, data[key]);
        }

        formData.append("imagen", image64, "img")
        // {...tarjetaLista, plataforma, imagen: GestorImagen.convertir_file_a_base64(image64)}

        const resultado = await guardarTarjeta(formData)
        if (resultado.exito) {
            toastSuccess(`La tarjeta ${data.nombre} ha sido agregada correctamente.`)

            reset()
            setImagenPreview(null)

            router.push('/admin/giftcards')
        } else {
            console.error("Error al guardar la tarjeta de regalo:", resultado.mensaje)
            toastError("No se pudo guardar la tarjeta de regalo. Inténtalo de nuevo.")
        }
        setIsSubmitting(false)
    }

    const validaciones = {
        nombre: {required: "El nombre es obligatorio"},
        region: {required: "La región es obligatoria"},
        precio: {
            required: "El precio es obligatorio",
            min: {value: 0, message: "El precio debe ser mayor a 0"},
        }
    }

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Información básica */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Información básica</CardTitle>
                            <CardDescription>Detalles principales de la tarjeta de regalo</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="nombre">
                                    Nombre <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="nombre"
                                    placeholder="Ej: PlayStation Store Gift Card"
                                    {...register("nombre", validaciones.nombre)}
                                />
                                {errors.nombre && <p className="text-sm text-red-500">{errors.nombre.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="region">
                                    Región <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="region"
                                    placeholder="Ej: USA, Europa, Global"
                                    {...register("region", validaciones.region)}
                                />
                                {errors.region && <p className="text-sm text-red-500">{errors.region.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="plataforma">Plataforma</Label>
                                <Select onValueChange={setPlataforma}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona una plataforma"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="playstation">PlayStation</SelectItem>
                                        <SelectItem value="xbox">Xbox</SelectItem>
                                        <SelectItem value="nintendo">Nintendo</SelectItem>
                                        <SelectItem value="steam">Steam</SelectItem>
                                        <SelectItem value="google">Google Play</SelectItem>
                                        <SelectItem value="apple">App Store</SelectItem>
                                        <SelectItem value="otro">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="descripcion">Descripción</Label>
                                <Textarea
                                    id="descripcion"
                                    placeholder="Describe la tarjeta de regalo y sus condiciones de uso"
                                    className="min-h-[120px]"
                                    {...register("descripcion")}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Precios y visibilidad */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Precios y visibilidad</CardTitle>
                                <CardDescription>Configura los precios y la visibilidad de la tarjeta</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="precioCliente">
                                            Precio cliente <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2.5">$</span>
                                            <Input
                                                id="precioCliente"
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                className="pl-7"
                                                placeholder="0.00"
                                                {...register("precioCliente", validaciones.precio)}
                                            />
                                        </div>
                                        {errors.precioCliente &&
                                            <p className="text-sm text-red-500">{errors.precioCliente.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="precioReventa">
                                            Precio reventa <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2.5">$</span>
                                            <Input
                                                id="precioReventa"
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                className="pl-7"
                                                placeholder="0.00"
                                                {...register("precioReventa", validaciones.precio)}
                                            />
                                        </div>
                                        {errors.precioReventa &&
                                            <p className="text-sm text-red-500">{errors.precioReventa.message}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2 pt-2">
                                    <Switch
                                        id="mostrarCliente"
                                        onCheckedChange={setMostrarCliente}
                                        defaultChecked={mostrarCliente}
                                    />
                                    <Label htmlFor="mostrarCliente" className="cursor-pointer">
                                        Mostrar al cliente
                                    </Label>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Si está desactivado, este producto solo será visible para revendedores.
                                </p>
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
                                                    <Trash className="h-4 w-4"/>
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="text-center py-8">
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
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>

                <div className="mt-6 flex justify-end gap-4">
                    <Button type="button" variant="outline" onClick={() => router.back()}>
                        Cancelar
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Guardando..." : "Guardar tarjeta de regalo"}
                        {!isSubmitting && <Save className="ml-2 h-4 w-4"/>}
                    </Button>
                </div>
            </form>


        </div>
    )
}

export default Agregar;