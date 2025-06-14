"use client"

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FaWhatsapp} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa6";
import React, {useEffect, useState} from "react";
import {Badge} from "@/components/ui/badge";
import {Flame} from "lucide-react";

function PlayStationPlusReventa({product}) {
    const [precioOferta, setPrecioOferta] = useState(0)
    // Estado para el período de tiempo seleccionado (1, 3 o 12 meses)
    const [selectedPeriod, setSelectedPeriod] = useState("12")

    const calcularPorcentajeAhorro = (producto) => {
        if (producto.tieneOferta) {
            if (producto.mesesEnOferta.includes(Number(selectedPeriod))) {
                return Math.round(((precioActual / precioOferta) * 100) - 100)
            }
        }
        return 0
    }

// Asegurarse de que product y product.precios existan con valores predeterminados
    const safeProduct = {
        title: product?.title || "Producto",
        tipo: product?.tipo || "",
        consola: product?.consola || "",
        precioReventa: product?.precioReventa || [0, 0, 0],
        image: product?.image || "/placeholder.svg",
        tieneOferta: product?.tieneOferta || false,
        precioOferta: product?.precioOferta || [],
        mesesEnOferta: product?.mesesEnOferta || [],
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

    useEffect(() => {
        saber(safeProduct)
    }, [selectedPeriod]);


    // Precios según el período seleccionado
    const precios = {
        1: safeProduct.precioReventa[0],
        3: safeProduct.precioReventa[1],
        12: safeProduct.precioReventa[2],
    }

    // Precio actual según el período seleccionado
    const precioActual = precios[selectedPeriod]

    const ahorroPorcentaje = calcularPorcentajeAhorro(safeProduct)

    // Crear mensaje para WhatsApp y Telegram
    const mensaje = encodeURIComponent(
        `Hola, soy revendedor y estoy interesado en ${safeProduct.title} ${safeProduct.tipo} para ${safeProduct.consola} por ${selectedPeriod} ${
            selectedPeriod === "1" ? "mes" : "meses"
        }.`,
    )

    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-shadow relative">
            <CardHeader className="flex-grow p-4 relative">
                {(product.tieneOferta && precioOferta !== 0) && (
                    <Badge
                        className="absolute top-2 right-2 bg-violet-500 hover:bg-violet-600 text-white flex items-center gap-1 z-20">
                        <Flame className="h-3 w-3"/>
                        OFERTA {ahorroPorcentaje}% OFF
                    </Badge>
                )}
                <div className="aspect-square relative mb-2">
                    <Image
                        src={safeProduct.image || "/placeholder.svg"}
                        alt={safeProduct.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-lg">
                    {safeProduct.title} {safeProduct.tipo}
                    <span className="block text-sm font-normal text-muted-foreground mt-1">{safeProduct.consola}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-1 md:p-4 pt-0 space-y-3">
                {/* Selector de tiempo */}
                <Tabs defaultValue="1" value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-full">
                    <TabsList className="grid grid-cols-3 w-full">
                        <TabsTrigger value="1">1M</TabsTrigger>
                        <TabsTrigger value="3">3M</TabsTrigger>
                        <TabsTrigger value="12">12M</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Precio para revendedores */}
                <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
                    <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-purple-700">
                            Precio para revendedores:
                        </p>
                    </div>
                    {safeProduct.tieneOferta && precioOferta !== 0 ? (
                        <div className="flex flex-col items-center text-violet-800">
                            <p className="text-sm line-through text-muted-foreground text-center">
                                ${precioActual.toLocaleString()}
                            </p>
                            <p className="text-lg sm:text-xl font-bold text-violet-600 text-center">
                                ${precioOferta.toLocaleString()}
                            </p>
                        </div>
                    ) : (
                        <p className="text-lg sm:text-xl font-bold text-violet-600 text-center">
                            ${precioActual.toLocaleString()}
                        </p>
                    )}

                    {/*<p className="text-xs text-center text-purple-600 mt-1">Descuentos especiales por volumen</p>*/}
                </div>
            </CardContent>
            <CardFooter className="p-1 md:p-2 pt-0 grid grid-cols-2 gap-2">
                <Link href={`https://wa.me/5491132001372?text=${mensaje}`} className="w-full" target="_blank">
                    <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700">
                        <FaWhatsapp className="h-8 w-8"/>
                        <p className={"hidden md:block"}>WhatsApp</p>

                    </Button>
                </Link>
                <Link href={`https://t.me/garretg_psn?text=${mensaje}`} className="w-full" target="_blank">
                    <Button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600">
                        <FaTelegram className="h-8 w-8"/>
                        <p className={"hidden md:block"}>Telegram</p>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default PlayStationPlusReventa;