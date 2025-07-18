"use client"

import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CreditCard, Gamepad2, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function PreventaCard({preventa}) {
    const handleGameClick = () => {
    }

    return (<Card
            className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            onClick={() => handleGameClick(preventa.id)}
        >
            <div className="relative h-[250px] w-full aspect-[3/4] overflow-hidden rounded-xl mx-auto">
                <Image src={preventa.imagenUrl || "/placeholder.svg"}
                       alt={preventa.titulo}
                       fill
                       className="object-contain"
                />
                <Badge className="absolute bottom-3 right-2 bg-purple-600 hover:bg-purple-600">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 me-1"/>
                    PREVENTA
                </Badge>
                {/*<Badge variant="secondary" className="absolute top-3 right-3">*/}
                {/*    /!*-{game.discount}%*!/*/}
                {/*    -20%*/}
                {/*</Badge>*/}
            </div>
            <CardContent className="p-2 sm:px-4">
                <div className="p-1 sm:p-2">
                    <h3 className="font-bold min-h-[3rem] lg:text-lg text-gray-900 mb-1 line-clamp-2">{preventa.titulo}</h3>
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
                    {/* Precio en cuotas */}
                    <span className="md:text-lg text-blue-700 p-1 sm:p-2">
                            ${preventa.precioClienteLista.toLocaleString("AR")}
                    </span>

                    {/* Precio por transferencia */}
                    <div className="flex items-center gap-2 bg-green-50 rounded-lg p-1 sm:p-2">
                        <span className="text-sm text-green-700">
                            ${preventa.precioClienteTransferencia.toLocaleString("AR")} con Transferencia
                        </span>
                        {/*<div className="flex items-center gap-1">*/}
                        {/*<CreditCard className="h-3 w-3 text-green-600"/>*/}
                        {/*<span className="text-sm text-green-700 font-medium"></span>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">Estreno: {preventa.fechaLanzamiento}</p>
                    <Link href={`/juegos/preventas/${preventa.id}`}>
                        <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                            Ver Detalles
                        </Button>
                    </Link>

                </div>
            </CardContent>
        </Card>)
}

export default PreventaCard;