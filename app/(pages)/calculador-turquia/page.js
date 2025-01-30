"use client"
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Button} from "@/components/ui/button";

const CalculadorTurquia = () => {
    const [valorLiras, setValorLiras] = useState(0)
    const [resultado, setResultado] = useState({})

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