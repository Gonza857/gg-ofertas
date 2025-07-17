"use client"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {toastError, toastSuccess} from "@/lib/Toast";
import {guardarJuegoStock} from "@/dominio/servicios/stock-juegos";
import {obtenerArrayDeConsola} from "@/dominio/utils/juegos-stock/utils";

function AgregarJuego() {
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        stock: 0,
        precioCliente: 0,
        precioReventa: 0,
        mostrarIdioma: false,
        tipo: "primaria",
        idioma: null,
        consola: "PS4/PS5"
    });

    const enviarFormulario = async (e) => {
        e.preventDefault()
        const juegoParaGuardar = {
            ...datosFormulario,
            consola: obtenerArrayDeConsola(datosFormulario.consola),
        }
        const {mensaje, exito} = await guardarJuegoStock(juegoParaGuardar)
        if (exito) return toastSuccess(mensaje)
        return toastError(mensaje)
    }

    const manejarCampos = (e) => {
        setDatosFormulario((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const manejarSelect = (campo, valor) => setDatosFormulario((prev) => ({...prev, [campo]: valor}))

    return (
        <main className={"styledMain"}>
            <article className={"bor1 w-full sm:w-11/12 md:w-8/12 lg:w-1/2 xl:w-1/3 mx-auto"}>
                <form className={"space-y-4"} onSubmit={enviarFormulario}>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"nombre"}>Nombre del juego</Label>
                        <Input
                            name={"nombre"}
                            type={"text"}
                            onChange={manejarCampos}
                            placeholder={"Nombre del juego"}
                        />
                    </div>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"stock"}>Stock</Label>
                        <Input
                            name={"stock"}
                            type={"number"}
                            onChange={manejarCampos}
                            placeholder={"777"}
                        />
                    </div>
                    <div className={"grid grid-cols-2 gap-4"}>
                        <div className={"space-y-2"}>
                            <Label htmlFor={"precioCliente"}>Precio Cliente</Label>
                            <Input
                                name={"precioCliente"}
                                type={"number"}
                                onChange={manejarCampos}
                                placeholder={"777"}
                            />
                        </div>
                        <div className={"space-y-2"}>
                            <Label htmlFor={"precioReventa"}>Precio Reventa</Label>
                            <Input
                                name={"precioReventa"}
                                type={"number"}
                                onChange={manejarCampos}
                                placeholder={"777"}
                            />
                        </div>
                    </div>
                    <InputWrapper>
                        <Label>Mostrar Idioma</Label>
                        <RadioGroup
                            value={datosFormulario?.mostrarIdioma}
                            onValueChange={(value) => manejarSelect("mostrarIdioma", value)}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={true} id="si"/>
                                <Label htmlFor="si">Sí</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={false} id="no"/>
                                <Label htmlFor="no">No</Label>
                            </div>
                        </RadioGroup>
                    </InputWrapper>
                    <div>
                        <Label>Selecciona para que consolas es</Label>
                        <Select onValueChange={(valor) => manejarSelect("consola", valor)} name="consola">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Elige una opción"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="PS3">PS3</SelectItem>
                                <SelectItem value="PS4">PS4</SelectItem>
                                <SelectItem value="PS5">PS5</SelectItem>
                                <SelectItem value="PS4/PS5">PS4/PS5</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Selecciona el tipo de cuenta</Label>
                        <Select onValueChange={(valor) => manejarSelect("tipo", valor)} name="tipo">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Elige una opción"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Primaria">Primaria</SelectItem>
                                <SelectItem value="Secundaria">Secundaria</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Selecciona el idioma del juego</Label>
                        <Select
                            onValueChange={(valor) => manejarSelect("idioma", valor)}
                            name="idioma"
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Elige una opción"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Español Latino">Español Latino</SelectItem>
                                <SelectItem value="Español Gallego">Español Gallego</SelectItem>
                                <SelectItem value="Inglés con subtitulos en español">Inglés con subtitulos en
                                    español</SelectItem>
                                <SelectItem value="Inglés">Inglés</SelectItem>
                                <SelectItem value={"-"}>Sin información</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        type={"submit"}
                    >
                        Enviar
                    </Button>
                </form>
            </article>
        </main>
    )
}

const InputWrapper = ({children}) => {
    return (
        <div className={"space-y-2"}>
            {children}
        </div>
    )
}

export default AgregarJuego