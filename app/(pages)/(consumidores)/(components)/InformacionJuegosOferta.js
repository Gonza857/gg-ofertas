import {CheckCircle, Clock, CreditCard, Info, MessageCircleQuestion} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";

function InformacionJuegosOferta({fecha}) {
    return (
        <div className={"space-y-4"}>
            <Alert className="border-red-200 bg-red-50">
                <Clock className="h-4 w-4"/>
                <AlertTitle className="text-red-800 flex items-center gap-2">
                    🔥 ¡Juegos en Oferta!
                    <Badge variant="destructive" className="animate-pulse">
                        Hasta el {fecha}
                    </Badge>
                </AlertTitle>
                <AlertDescription className="text-red-700">
                    Aprovecha los precios especiales antes de que termine la promoción
                </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50">
                <Info className="h-4 w-4"/>
                <AlertTitle className="text-yellow-800">Información importante</AlertTitle>
                <AlertDescription className="text-yellow-700">
                    Más información sobre tiempos de entrega, envio, garantía y compatibilidad.
                    <Link href="/preguntas-frecuentes/juegos/ofertas" className={"ms-1 underline transition-all"}>
                        Click aqui
                    </Link>
                </AlertDescription>
            </Alert>

            <Card className="border-green-200 bg-blue-50">
                <CardContent className="p-4">
                    <div className="flex flex-col items-start gap-3">
                        <div className={"flex gap-2 items-center"}>
                            <MessageCircleQuestion className="h-4 w-4"/>
                            <h3 className="text-blue-800">Preguntas frecuentes</h3>
                        </div>
                        <div>
                            <p className="text-sm text-blue-700">
                                Para más información sobre nuestros juegos digitales
                                <Link href="/preguntas-frecuentes" className={"ms-1 underline transition-all"}>
                                    click aqui
                                </Link>
                                .
                            </p>

                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-blue-700">
                            <Clock className="h-5 w-5"/>
                            Beneficios
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className={"flex gap-2"}>
                                <CheckCircle className="h-4 w-4 text-blue-600"/>
                                <span className="text-sm">Garantía</span>
                            </div>
                            <Badge variant="secondary">Ilimitada</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className={"flex gap-2"}>
                                <CheckCircle className="h-4 w-4 text-blue-600"/>
                                <span className="text-sm">Soporte técnico personalizado</span>
                            </div>
                            <Badge variant="secondary">Todos los días</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className={"flex gap-2"}>
                                <CheckCircle className="h-4 w-4 text-blue-600"/>
                                <span className="text-sm">Juegos y licencias</span>
                            </div>
                            <Badge variant="secondary">Originales y oficiales</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-green-700">
                            <CreditCard className="h-5 w-5"/>
                            Precios
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm w-1/2">Precio lista</span>
                            <Badge variant="secondary" className={"w-1/2"}>Hasta 3 cuotas sin interés</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm w-1/2">Precio transferencia</span>
                            <Badge className={"bg-green-600 text-white"}>
                                20% OFF
                            </Badge>
                        </div>
                        <Alert className="mt-3 p-2">
                            <AlertDescription className="text-xs">
                                💡 Para otros métodos de pago, consultanos por WhatsApp
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default InformacionJuegosOferta