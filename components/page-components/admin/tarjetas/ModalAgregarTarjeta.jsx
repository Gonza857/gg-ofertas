import {useState} from "react";
import ModalCustomizado from "@/components/personalized-ui/Modal";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

function ModalAgregarTarjeta({agregar, handleModal, estaAbierto}) {
    const datosVacios = {
        nombre: null,
        region: null,
        precioCliente: 0,
        precioReventa: 0,
    }
    const [datosForm, setDatosForm] = useState(datosVacios)

    const enviarDatos = async (e) => {
        e.preventDefault()
        await agregar(datosForm)
        handleModal()
        setDatosForm(datosVacios)
    }

    const actualizarCampo = (e) => {
        setDatosForm(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    return (
        <ModalCustomizado estaAbierto={estaAbierto}>
            <ModalCustomizado.Titulo>Agregar tarjeta</ModalCustomizado.Titulo>
            <form className={"space-y-4"} onSubmit={enviarDatos}>
                <div className={"space-y-2"}>
                    <Label htmlFor={"nombre"}>Nombre</Label>
                    <Input
                        name={"nombre"}
                        type={"text"}
                        onChange={actualizarCampo}
                        placeholder={"Nombre"}
                    />
                </div>
                <div className={"space-y-2"}>
                    <Label htmlFor={"region"}>Región</Label>
                    <Input
                        name={"region"}
                        type={"text"}
                        onChange={actualizarCampo}
                        placeholder={"Región"}
                    />
                </div>
                <div className={"space-y-2"}>
                    <Label htmlFor={"precioCliente"}>Precio cliente</Label>
                    <Input
                        name={"precioCliente"}
                        type={"number"}
                        onChange={actualizarCampo}
                        placeholder={"1000"}
                    />
                </div>
                <div className={"space-y-2"}>
                    <Label htmlFor={"precioReventa"}>Precio reventa</Label>
                    <Input
                        name={"precioReventa"}
                        type={"number"}
                        onChange={actualizarCampo}
                        placeholder={"800"}
                    />
                </div>
                <div className={"w-full justify-end flex gap-4"}>
                    <Button
                        variant="destructive"
                        type={"button"}
                        onClick={handleModal}
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

export default ModalAgregarTarjeta;