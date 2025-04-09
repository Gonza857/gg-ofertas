"use client"

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FaWhatsapp} from "react-icons/fa";
import React, {useState} from "react";
import {BadgePercent, BanknoteIcon, CreditCard} from "lucide-react";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Badge} from "@/components/ui/badge";

function PlayStationPlus({product}) {
    console.log(product);
    // Estado para el período de tiempo seleccionado (1, 3 o 12 meses)
    const [selectedPeriod, setSelectedPeriod] = useState("1")

    // Precios según el período seleccionado
    const precioLista = {
        1: product.precioLista[0],
        3: product.precioLista[1],
        12: product.precioLista[2],
    }

    // Precio actual según el período seleccionado
    const precioActual = precioLista[selectedPeriod]

    // Calcular el precio de transferencia (20% menos)
    const precioTransferencia = precioLista[selectedPeriod] * 0.8

    // Calcular el precio por cuota (3 cuotas)
    const precioPorCuota = Math.ceil(precioActual / 3)

    // Calcular el ahorro en pesos
    const ahorro = precioLista[selectedPeriod] * 0.2

    // Crear mensaje para WhatsApp
    const mensaje = encodeURIComponent(
        `Hola, estoy interesado en ${product.title} ${product.tipo} para ${product.consola} por ${selectedPeriod} ${selectedPeriod === "1" ? "mes" : "meses"}`,
    )

    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader className="flex-grow p-4">
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
            <CardContent className="p-4 pt-0 space-y-3">
                {/* Selector de tiempo */}
                <Tabs defaultValue="1" value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-full">
                    <TabsList className="grid grid-cols-3 w-full">
                        <TabsTrigger value="1">1 Mes</TabsTrigger>
                        <TabsTrigger value="3">3 Meses</TabsTrigger>
                        <TabsTrigger value="12">12 Meses</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Precio normal */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Precio lista:</p>
                    <p className="text-lg sm:text-xl font-bold">${precioActual.toLocaleString()}</p>
                </div>

                {/* Precio transferencia con descuento */}
                <div className="bg-green-50 p-3 rounded-md border border-green-100">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                            <BanknoteIcon className="h-4 w-4 text-green-600"/>
                            <p className="text-sm font-medium text-green-700">Transferencia bancaria:</p>
                        </div>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                            20% OFF
                        </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-green-600">Ahorrás: ${ahorro.toLocaleString()}</p>
                        <p className="text-lg sm:text-xl font-bold text-green-700">${precioTransferencia.toLocaleString()}</p>
                    </div>
                </div>

                {/* Información de cuotas */}
                <div className="flex items-center justify-between bg-red-50 p-2 rounded-md border border-red-100">
                    <div className="flex items-center gap-1.5">
                        <CreditCard className="h-4 w-4 text-red-600"/>
                        <p className="text-sm font-medium text-red-700">3 cuotas de:</p>
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-red-700">${precioPorCuota.toLocaleString()}</p>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
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
