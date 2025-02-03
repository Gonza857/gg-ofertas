"use client"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import {Button} from "@/components/ui/button";

function AgregarJuego() {
    const [datosFormulario, setDatosFormulario] = useState({});

    const enviarFormulario = (e) => {
        e.preventDefault()
        console.log("Envio estos datos")
        console.log(datosFormulario);
    }

    const manejarCampos = (e) => {
        setDatosFormulario((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const manejarSelect = (campo, valor) => setDatosFormulario((prev) => ({...prev, [campo]: valor}))

    return (
        <main className={"styledMain"}>
            <article className={"bor1 w-full sm:w-11/12 md:w-8/12 lg:w-1/4 mx-auto"}>
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
                    <div>
                        <Label>Selecciona el tipo de cuenta</Label>
                        <Select onValueChange={(valor) => manejarSelect("tipo", valor)} name="tipo">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Elige una opción"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="primaria">Primaria</SelectItem>
                                <SelectItem value="secundaria">Secundaria</SelectItem>
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
                                <SelectItem value="Sin información">Sin información</SelectItem>
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

export default AgregarJuego