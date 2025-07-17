"use client"

import {Card, CardContent} from "@/components/ui/card";
import {Clock, CreditCard, Gamepad2, Joystick, MessageCircle, Shield} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

function PreventaDetalle({preventa}) {

    const handleContact = () => {
        const message = `Hola! Me interesa la preventa "${preventa.titulo} ${preventa.tipo} ${preventa.plataforma}". ¿Está disponible?`
        const whatsappUrl = `https://wa.me/5491132001372?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Imagen del juego */}
            <div className="space-y-4">
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <img
                            src={preventa.imagenUrl || "/placeholder.svg"}
                            alt={preventa.titulo}
                            className="w-full h-[300px] md:h-[400px] object-cover"
                        />
                    </CardContent>
                </Card>
            </div>

            {/* Información del juego */}
            <div className="space-y-6">
                {/* Header con título y acciones */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            {preventa.titulo} - {preventa?.tipo ?? "-"}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                                <Gamepad2 className="h-4 w-4"/>
                                {preventa.plataforma}
                            </span>
                            <span>Estreno: {preventa.fechaLanzamiento}</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {/*<Button variant="outline" size="sm" onClick={handleShare}>*/}
                        {/*    <Share2 className="h-4 w-4"/>*/}
                        {/*</Button>*/}
                    </div>
                </div>

                {/* Sección de Precios */}
                <div className="space-y-4">
                    {/* Precio por Transferencia */}
                    <Card className="border-green-200 bg-green-50">
                        <CardContent className="p-4">
                            <div className="flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2 w-full">
                                        <CreditCard className="h-5 w-5 text-green-600"/>
                                        <span
                                            className="text-sm font-semibold text-green-800">Precio por Transferencia</span>
                                        <Badge variant="destructive" className="text-xs w-fit px-1 md:px-2.5">
                                            -20% OFF
                                        </Badge>
                                    </div>
                                    <div className="text-2xl font-bold text-green-700 mb-1">
                                        ${preventa.precioClienteTransferencia.toFixed(2)}
                                    </div>
                                    <p className="text-sm text-green-600">Abonando por CVU/CBU - Mejor precio</p>
                                </div>
                                <div className="text-right">
                                    {/*<Badge variant={stockStatus.color as any} className="mb-2">*/}
                                    {/*    {stockStatus.icon} {stockStatus.text}*/}
                                    {/*</Badge>*/}
                                    <Badge>
                                        ✅ Disponible
                                    </Badge>
                                    {/*<p className="text-sm text-gray-600">Stock: 77 unidades</p>*/}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Precio en Cuotas */}
                    <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <CreditCard className="h-5 w-5 text-blue-600"/>
                                <span className="font-semibold text-blue-800">Precio en Cuotas</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                                <div>
                                    <div className="text-2xl font-bold text-blue-700 mb-1">
                                        ${preventa.precioClienteLista.toFixed(2)}
                                    </div>
                                    <p className="text-sm text-blue-600">Precio de lista</p>
                                </div>
                                <div className="text-right md:text-left">
                                    <div className="text-xl font-semibold text-blue-700 mb-1">
                                        {/*{gameData.cuotasDisponibles}x ${cuotaAmount.toFixed(2)}*/}
                                        6x ${Math.round(preventa.precioClienteLista / 6)}
                                    </div>
                                    <p className="text-sm text-blue-600">Sin interés con tarjeta</p>
                                </div>
                            </div>
                            <div className="mt-3 p-2 bg-blue-100 rounded-lg">
                                <p className="text-xs text-blue-700 text-center">
                                    ✨ Disponible en 6 cuotas sin interés con tarjetas de crédito
                                </p>
                            </div>
                        </CardContent>
                    </Card>


                </div>


                {/* Botón de contacto principal */}
                {/*<Button size="lg" className="w-full text-lg py-6 bg-green-600 hover:bg-green-700">*/}
                {/*    <MessageCircle className="h-5 w-5 mr-2"/>*/}
                {/*    Contactar por WhatsApp*/}
                {/*</Button>*/}

                 {/*Botón de contacto principal*/}
                <Button onClick={handleContact} size="lg" className="w-full text-lg py-6 bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contactar por WhatsApp
                </Button>

                {/* Información de envío y garantía */}
                <div className="grid grid-cols-3 gap-4">
                    <Card className="text-center">
                        <CardContent className="p-4">
                            <Joystick className="h-6 w-6 text-blue-600 mx-auto mb-2"/>
                            <p className="text-sm font-medium">Formato</p>
                            <p className="text-xs text-gray-600">Digital</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center">
                        <CardContent className="p-4">
                            <Shield className="h-6 w-6 text-green-600 mx-auto mb-2"/>
                            <p className="text-sm font-medium">Garantía</p>
                            <p className="text-xs text-gray-600">Ilimitada</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center">
                        <CardContent className="p-4">
                            <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2"/>
                            <p className="text-sm font-medium">Entrega</p>
                            <p className="text-xs text-gray-600">5 minutos</p>
                        </CardContent>
                    </Card>
                </div>

            </div>

        </div>
    )
}

export default PreventaDetalle