"use client"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {subirPlaystationplus} from "@/dominio/servicios/playstationplus";
import {toastError, toastSuccess} from "@/lib/Toast";
import {useRouter} from "next/navigation";

function AgregarPlaystationPlus() {
    const [datosFormulario, setDatosFormulario] = useState({
        costo: 0,
        estado: "Nuevo",
        tipo: null,
        slotsPs4: 2,
        slotsPs5: 2,
        duracion: null,
    });

    const router = useRouter()

    const enviarFormulario = async (e) => {
        e.preventDefault()
        if (datosFormulario?.costo === 0) return toastError("Añade el costo total de la FULL.")
        if (!datosFormulario?.tipo) return toastError("Añade el tipo de PlayStation Plus.")
        const data = await subirPlaystationplus(datosFormulario);
        const {mensaje, exito} = data;
        if (exito) {
            toastSuccess(mensaje)
            router.push("/admin/playstationplus/liquidacion")
        }
        return toastError(mensaje);
    }

    const manejarCampos = (e) => {
        setDatosFormulario((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const manejarSelect = (campo, valor) => setDatosFormulario((prev) => ({...prev, [campo]: valor}))

    return (
        <section className={"w-full sm:w-11/12 md:w-8/12 lg:w-1/4 mx-auto"}>
            <form className={"space-y-4"} onSubmit={enviarFormulario}>
                <div>
                    <Label>Selecciona el tipo de PlayStation Plus</Label>
                    <Select onValueChange={(valor) => manejarSelect("tipo", valor)} name="tipo">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Elige una opción"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Essential">Essential</SelectItem>
                            <SelectItem value="Extra">Extra</SelectItem>
                            <SelectItem value="Deluxe">Deluxe</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <InputWrapper>
                    <Label>¿Es nuevo o de liquidación?</Label>
                    <RadioGroup
                        value={datosFormulario?.estado}
                        onValueChange={(value) => manejarSelect("estado", value)}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Nuevo" id="nuevo"/>
                            <Label htmlFor="nuevo">Nuevo</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Liquidacion" id="liquidacion"/>
                            <Label htmlFor="liquidacion">Liquidación</Label>
                        </div>
                    </RadioGroup>
                </InputWrapper>
                {datosFormulario.estado === "Liquidacion" &&
                    (<InputWrapper>
                        <Label name={"diasRestantes"}>Días restantes</Label>
                        <DiasRestantesInput manejarInput={manejarCampos}/>
                    </InputWrapper>)
                }
                <div>
                    <Label>
                        {datosFormulario.estado === "Liquidacion" ?
                            "¿Por cuanto tiempo fue adquirido? (1, 3 o 12)" : "Selecciona el tiempo por el cual fue adquirido"}
                    </Label>
                    <Select onValueChange={(valor) => manejarSelect("duracion", valor)} name={"tiempo"}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Elige una opción"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"30"}>1 Mes</SelectItem>
                            <SelectItem value={"90"}>3 Meses</SelectItem>
                            <SelectItem value={"365"}>12 Meses</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className={"grid grid-cols-2 gap-4"}>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"slotsPs4"}>Slots PS4</Label>
                        <Input
                            name={"slotsPs4"}
                            type={"number"}
                            onChange={manejarCampos}
                            placeholder={"777"}
                            defaultValue={datosFormulario?.slotsPs4}
                        />
                    </div>
                    <div className={"space-y-2"}>
                        <Label htmlFor={"slotsPs5"}>Slots PS5</Label>
                        <Input
                            name={"slotsPs5"}
                            type={"number"}
                            onChange={manejarCampos}
                            placeholder={"777"}
                            defaultValue={datosFormulario?.slotsPs5}
                        />
                    </div>
                </div>
                <InputWrapper>
                    <Label>Ingrese el costo total</Label>
                    <Input
                        name={"costo"}
                        type={"number"}
                        onChange={manejarCampos}
                        placeholder={"$7.777"}
                    />
                </InputWrapper>
                <Button
                    type={"submit"}
                >
                    Enviar
                </Button>
            </form>
        </section>
    )
}

const DiasRestantesInput = ({manejarInput}) => {
    return (
        <Input
            name="diasRestantes"
            onChange={manejarInput}
            placeholder={"256"}
            type={"number"}
        />
    )
}

const InputWrapper = ({children}) => {
    return (
        <div className={"space-y-2"}>
            {children}
        </div>
    )
}

export default AgregarPlaystationPlus