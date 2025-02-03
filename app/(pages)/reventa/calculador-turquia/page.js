"use client"
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";

const CalculadorTurquia = () => {
    const [valorLiras, setValorLiras] = useState(0)
    const [resultado, setResultado] = useState({})
    const [datosCalculo, setDatosCalculo] = useState({
        precioEnLiras: 0,
        dolar: 0,
        precioDeVenta: 0,
    })

    const manejarValorLiras = (e) => {
        setValorLiras(e.target.value)
    }

    const manejarConsulta = (e) => {
        e.preventDefault()
        const precioEnUSD = valorLiras * 0.04;
        const precioPorDolar = 1200
        const precioFullEnARS = precioEnUSD * precioPorDolar;
        const precioPorLiraReventa = 60
        const precioPorLiraCliente = precioFullEnARS / valorLiras;
        const precioFullReventa = precioPorLiraReventa * valorLiras;
        const ganancia = precioFullReventa - precioFullEnARS;
        setResultado({
            "Costo FULL": precioFullEnARS,
            "Dólar": precioPorDolar,
            "Venta FULL": precioFullReventa,
            "Ganancia": ganancia
        })
    }

    const manejarCambioInputs = (e) => {
        setDatosCalculo((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const calcularReglaDeTres = (a, b, c) => {
        console.log(`${a} - ${b}`)
        console.log(`${c} - ?`)
        return (Number(c) / Number(a)) * Number(b)
    }

    return (
        <main className={"min-h-screen bor1 bg-transparent"}>
            <h1>Calculador de precio - Turquía</h1>
            <form method={"GET"} onSubmit={manejarConsulta}>
                <Input
                    name={"precio-liras"}
                    type="number"
                    placeholder={"Ingrese precio en Liras (TL)"}
                    onChange={manejarValorLiras}
                />
                <Button type="submit">
                    Consultar
                </Button>
            </form>
            <div className={"flex flex-col gap-4"}>
                <div className={"bor2 w-4/12 mx-auto space-y-2"}>
                    <Label htmlFor={"precioEnLiras"}>Inserte precio en Liras</Label>
                    <Input
                        name={"precioEnLiras"}
                        type={"number"}
                        onChange={manejarCambioInputs}
                    />
                </div>
                <div className={"bor2 w-4/12 mx-auto space-y-2"}>
                    <Label htmlFor={"dolar"}>Inserte precio del dolar actual</Label>
                    <Input
                        name={"dolar"}
                        type={"number"}
                        onChange={manejarCambioInputs}
                    />
                </div>
                <div className={"bor2 w-4/12 mx-auto space-y-2"}>
                    <Label htmlFor={"precioDeVenta"}>Inserte precio de venta</Label>
                    <Input
                        name={"precioDeVenta"}
                        type={"number"}
                        onChange={manejarCambioInputs}
                    />
                </div>
            </div>
            <div className={"mx-auto w-4/12"}>
                <p>Precio en liras: {datosCalculo?.precioEnLiras}</p>
                <p>Precio en USDT: {datosCalculo?.precioEnLiras * 0.04}</p>
                <p>Precio por dolar: {datosCalculo?.dolar}</p>
                <p>Precio en ARS: {(datosCalculo?.precioEnLiras * 0.04) * datosCalculo?.dolar}</p>
                <p>Precio de venta: {datosCalculo?.precioDeVenta}</p>
                <p>Ganancia: {datosCalculo?.precioDeVenta - ((datosCalculo?.precioEnLiras * 0.04) * datosCalculo?.dolar)}</p>
                <p>
                    Porcentaje ganancia: %{
                    (calcularReglaDeTres(
                        ((datosCalculo?.precioEnLiras * 0.04) * datosCalculo?.dolar),
                        100,
                        datosCalculo?.precioDeVenta
                    ) - 100).toFixed(2)
                }
                </p>
            </div>
            {resultado !== {} &&
                <>
                {Object.entries({...resultado}).map(([key, value]) => (
                        <>
                            <p>
                                <strong>
                                    {key}
                                </strong>
                                : {value}
                            </p>
                        </>))
                    }
                </>
            }
        </main>
    )
}

export default CalculadorTurquia