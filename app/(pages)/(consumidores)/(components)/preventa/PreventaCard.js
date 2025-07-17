"use client"

import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CreditCard, Gamepad2, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

function PreventaCard({preventa}) {
    const handleGameClick = () => {
    }

    return (
        <Card
            className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            onClick={() => handleGameClick(preventa.id)}
        >
            <div className="relative">
                <img src={preventa.imagenUrl || "/placeholder.svg"} alt={preventa.titulo}
                     className="w-full h-48 object-cover"/>
                <Badge className="absolute top-3 left-3 bg-purple-600 hover:bg-purple-600">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 me-1" />
                    PREVENTA
                </Badge>
                {/*<Badge variant="secondary" className="absolute top-3 right-3">*/}
                {/*    /!*-{game.discount}%*!/*/}
                {/*    -20%*/}
                {/*</Badge>*/}
            </div>
            <CardContent className="p-4">
                <div className="mb-3">
                    <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2">{preventa.titulo}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Gamepad2 className="h-3 w-3"/>
                            {preventa.plataforma}
                        </span>
                        {/*<span className="flex items-center gap-1">*/}
                        {/*  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />*/}
                        {/*    {game.rating}*/}
                        {/*</span>*/}
                        <span className="flex items-center gap-1">
                            {preventa?.tipo ?? "-"}
                        </span>
                    </div>
                </div>

                {/* Precios compactos */}
                <div className="space-y-2 mb-3">
                    {/* Precio por transferencia */}
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-2">
                        <div className="flex items-center gap-1">
                            <CreditCard className="h-3 w-3 text-green-600"/>
                            <span className="text-xs text-green-700 font-medium">Transferencia</span>
                        </div>
                        <span className="font-bold text-green-700">${preventa.precioClienteTransferencia}</span>
                    </div>

                    {/* Precio en cuotas */}
                    <div className="flex items-center justify-between bg-blue-50 rounded-lg p-2">
                        <div className="flex items-center gap-1">
                            <CreditCard className="h-3 w-3 text-blue-600"/>
                            <span className="text-xs text-blue-700 font-medium">
                            {/*{game.cuotasDisponibles}x sin interés*/}
                                6x sin interés

                          </span>
                        </div>
                        <span className="font-bold text-blue-700">
                          ${(preventa.precioClienteLista / 6).toFixed(2)}
                        </span>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">Lanzamiento: {preventa.fechaLanzamiento}</p>
                    <Link href={`/juegos/preventas/${preventa.id}`}>
                        <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                            Ver Detalles
                        </Button>
                    </Link>

                </div>
            </CardContent>
        </Card>
    )
}

export default PreventaCard;