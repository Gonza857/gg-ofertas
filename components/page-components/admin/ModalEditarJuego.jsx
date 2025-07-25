"use client"

import ModalCustomizado from "@/components/personalized-ui/Modal";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import {actualizarJuegoStock} from "@/dominio/servicios/stock-juegos";
import {toastError, toastSuccess} from "@/lib/Toast";
import {useStockStore} from "@/app/(modules)/admin/context/contextoJuego";


function ModalEditarJuego({estaAbierto, manejarModalEditar, juegoSeleccionado = null, actualizarLocal}) {
    const {actualizarJE} = useStockStore()

    const [datosFormulario, setDatosFormulario] = useState({...juegoSeleccionado});
    const router = useRouter();

    if (!juegoSeleccionado) return;

    const enviarFormulario = async (e) => {
        e.preventDefault()
        const {mensaje, exito} = await actualizarJuegoStock({...juegoSeleccionado, ...datosFormulario});
        if (exito) {
            toastSuccess(mensaje);
            actualizarJE({...juegoSeleccionado, ...datosFormulario})
            router.push("/admin/stock/juegos")

        } else {
            toastError(mensaje);
        }
        manejarModalEditar()
        setDatosFormulario({})
    }

    const manejarCampos = (e) => {
        setDatosFormulario((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const manejarSelect = (campo, valor) => setDatosFormulario((prev) => ({...prev, [campo]: valor}))

    return (
        <ModalCustomizado estaAbierto={estaAbierto}>
            <ModalCustomizado.Titulo>Editando: {juegoSeleccionado.nombre}</ModalCustomizado.Titulo>
            <form className={"space-y-4"} onSubmit={enviarFormulario}>
                <div className={"space-y-2"}>
                    <Label htmlFor={"nombre"}>Nombre del juego</Label>
                    <Input
                        name={"nombre"}
                        type={"text"}
                        onChange={manejarCampos}
                        placeholder={"Nombre del juego"}
                        defaultValue={juegoSeleccionado.nombre}
                    />
                </div>
                <div className={"grid grid-cols-2 gap-4"}>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"precioCliente"}>Precio Cliente</Label>
                        <Input
                            name={"precioCliente"}
                            type={"number"}
                            onChange={manejarCampos}
                            defaultValue={juegoSeleccionado.precioCliente}
                        />
                    </div>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"precioReventa"}>Precio Reventa</Label>
                        <Input
                            name={"precioReventa"}
                            type={"number"}
                            onChange={manejarCampos}
                            defaultValue={juegoSeleccionado.precioReventa}
                        />
                    </div>
                </div>
                <div className={"grid grid-cols-2 items-start gap-4"}>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"stock"}>Stock</Label>
                        <Input
                            name={"stock"}
                            type={"number"}
                            onChange={manejarCampos}
                            defaultValue={juegoSeleccionado.stock}
                        />
                    </div>
                    <InputWrapper>
                        <Label>Mostrar Idioma</Label>
                        <RadioGroup
                            className={"flex gap-4"}
                            defaultValue={juegoSeleccionado?.mostrarIdioma}
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
                </div>
                <div>
                    <Label>Selecciona consola</Label>
                    <Select
                        defaultValue={juegoSeleccionado?.consola.join("/")}
                        onValueChange={(valor) => manejarSelect("consola", valor)}
                        name="consola">
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
                    <Label>Selecciona tipo de cuenta</Label>
                    <Select
                        defaultValue={juegoSeleccionado.tipo}
                        onValueChange={(valor) => manejarSelect("tipo", valor)}
                        name="tipo">
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
                    <Label>Selecciona idioma del juego</Label>
                    <Select
                        defaultValue={juegoSeleccionado.idioma ?? "-"}
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
                <p className={"text-sm"}>Editado por última vez: {juegoSeleccionado.editado ?? "-"}</p>
                <div className={"w-full justify-end flex gap-4"}>
                    <Button
                        variant="destructive"
                        type={"button"}
                        onClick={() => manejarModalEditar()}
                    >
                        Cancelar
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

const InputWrapper = ({children}) => {
    return (
        <div className={"space-y-2"}>{children}</div>
    )
}

export default ModalEditarJuego