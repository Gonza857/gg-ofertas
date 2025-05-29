"use client"

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FaWhatsapp} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {BadgePercent, BanknoteIcon, CreditCard, Flame} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"

function PlayStationPlus({product}) {
    // Estado para el período de tiempo seleccionado (1, 3 o 12 meses)
    const [selectedPeriod, setSelectedPeriod] = useState("12")
    const [precioOferta, setPrecioOferta] = useState(0)

    // Precios según el período seleccionado
    const precioLista = {
        1: product.precioLista[0],
        3: product.precioLista[1],
        12: product.precioLista[2],
    }

    // Precio actual según el período seleccionado
    const precioActual = precioLista[selectedPeriod]

    const calcularPrecioCuotas = (producto) => {
        if (producto.tieneOferta) {
            if (producto.mesesEnOferta.includes(Number(selectedPeriod))) {
                return Math.ceil(precioOferta / 3)
            } else {
                return Math.ceil(precioActual / 3)
            }
        } else {
            return Math.ceil(precioActual / 3)
        }
    }

    const saber = (objecto) => {
        const {precioOferta, mesesEnOferta} = objecto
        mesesEnOferta.forEach((mes, i) => {
            if (mes === Number(selectedPeriod)) {
                setPrecioOferta(precioOferta[i])
            } else {
                setPrecioOferta(0)
            }
        })
    }

    const calcularAhorro = (producto) => {
        if (producto.tieneOferta) {
            if (producto.mesesEnOferta.includes(Number(selectedPeriod))) {
                return precioOferta * 0.2
            } else {
                return precioLista[selectedPeriod] * 0.2
            }
        } else {
            return precioLista[selectedPeriod] * 0.2
        }
    }

    const calcularPrecioTransferencia = (producto) => {
        if (producto.tieneOferta) {
            if (producto.mesesEnOferta.includes(Number(selectedPeriod))) {
                return precioOferta * 0.8
            } else {
                return precioLista[selectedPeriod] * 0.8
            }
        } else {
            return precioLista[selectedPeriod] * 0.8
        }
    }

    const calcularPorcentajeAhorro = (producto) => {
        if (producto.tieneOferta) {
            if (producto.mesesEnOferta.includes(Number(selectedPeriod))) {
                return Math.round(((precioActual / precioOferta) * 100) - 100)
            }
        }
        return 0

    }

    useEffect(() => {
        saber(product)
    }, [selectedPeriod]);


    // Calcular el precio de transferencia (20% menos)
    const precioTransferencia = calcularPrecioTransferencia(product)

    // Calcular el precio por cuota (3 cuotas)
    const precioPorCuota = calcularPrecioCuotas(product)

    // Calcular el ahorro en pesos
    const ahorro = calcularAhorro(product)

    const ahorroPorcentaje = calcularPorcentajeAhorro(product)

    // Opciones de período
    const periodos = [
        {value: "1", label: "1 Mes"},
        {value: "3", label: "3 Meses"},
        {value: "12", label: "12 Meses"},
    ]


    // Crear mensaje para WhatsApp
    const mensaje = encodeURIComponent(
        `Hola, estoy interesado en ${product.title} ${product.tipo} para ${product.consola} por ${selectedPeriod} ${selectedPeriod === "1" ? "mes" : "meses"}`,
    )

    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader className="flex-grow p-2 px-2 relative">
                {(product.tieneOferta && precioOferta !== 0) && (
                    <Badge
                        className="absolute top-2 right-2 bg-violet-500 hover:bg-violet-600 text-white flex items-center gap-1 z-20">
                        <Flame className="h-3 w-3"/>
                        OFERTA {ahorroPorcentaje}% OFF
                    </Badge>
                )}
                <div className="aspect-square relative mb-2">
                    <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-lg">
                    {product.title} {product.tipo}
                    <span className="block text-sm font-normal text-muted-foreground mt-1">{product.consola}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-1 md:px-4 pt-0 space-y-3">
                {/* Selector de tiempo con Select */}
                <div className="w-full">
                    <Select defaultValue="1" value={selectedPeriod} onValueChange={setSelectedPeriod}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Seleccionar período"/>
                        </SelectTrigger>
                        <SelectContent>
                            {periodos.map((periodo) => (
                                <SelectItem key={periodo.value} value={periodo.value}>
                                    {periodo.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Precio normal o con oferta */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Precio lista:</p>
                    {product.tieneOferta && precioOferta !== 0 ? (
                        <div className="flex flex-col items-end">
                            <p className="text-sm line-through text-muted-foreground">
                                ${precioActual.toLocaleString()}
                            </p>
                            <p className="text-lg sm:text-xl font-bold text-violet-600">
                                ${precioOferta.toLocaleString()}
                            </p>
                        </div>
                    ) : (
                        <p className="text-lg sm:text-xl font-bold">${precioActual.toLocaleString()}</p>
                    )}
                </div>

                {/* Precio transferencia con descuento */}
                <div className="flex items-center justify-between bg-green-50 p-1 px-2 rounded-md border border-green-100">
                    <div className="flex items-center gap-1.5">
                        <BanknoteIcon className="hidden sm:block h-4 w-4 text-green-600"/>
                        <p className="text-sm font-medium text-green-700">Transferencia:</p>
                    </div>
                    <p className="text-sm sm:text-lg md:text-xl font-bold text-green-700">
                        ${precioTransferencia.toLocaleString()}
                    </p>
                </div>

                {/* Información de cuotas */}
                <div className="flex items-center justify-between bg-red-50 p-1 px-2 rounded-md border border-red-100">
                    <div className="flex items-center gap-1.5">
                        <CreditCard className="hidden sm:block h-4 w-4 text-red-600"/>
                        <p className="text-sm font-medium text-red-700">3 cuotas de:</p>
                    </div>
                    <p className="text-sm sm:text-lg font-bold text-red-700">${precioPorCuota.toLocaleString()}</p>
                </div>
            </CardContent>
            <CardFooter className="p-1 md:p-4 pt-0">
                <Link href={`https://wa.me/5491132001372?text=${mensaje}`} className="w-full" target="_blank">
                    <Button className="w-full flex items-center gap-2">
                        <FaWhatsapp className="h-4 w-4"/>
                        Me interesa
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default PlayStationPlus;
