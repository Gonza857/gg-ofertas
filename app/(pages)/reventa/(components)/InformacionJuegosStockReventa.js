import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AlertCircle, CheckCircle, Clock, CreditCard, Info} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import React from "react";

function InformacionJuegosStockReventa () {
    return (
        <div className={"space-y-4"}>
            <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5"/>
                        <div>
                            <h3 className="font-semibold text-blue-800 mb-1">📋 Información de precios</h3>
                            <p className="text-sm text-blue-700">
                                Si el juego publicado esta de oferta
                                <strong> se toma el precio de oferta</strong>.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Alert className="border-yellow-200 bg-yellow-50">
                <Info className="h-4 w-4"/>
                <AlertTitle className="text-yellow-800">Información importante</AlertTitle>
                <AlertDescription className="text-yellow-700">
                    Más información sobre tiempos de entrega, envio, garantía y compatibilidad.
                    <Link href="/reventa/preguntas-frecuentes/juegos/stock" className={"ms-1 underline transition-all"}>
                        Click aqui
                    </Link>
                </AlertDescription>
            </Alert>

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
                            Formas de Pago
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-600"/>
                            <span className="text-sm">Transferencia bancaria</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-600"/>
                            <span className="text-sm">Criptomonedas</span>
                        </div>
                        <Alert className="mt-3 p-2">
                            <AlertDescription className="text-xs">
                                💡 Para descuentos comprando varias unidades, consultar.
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default InformacionJuegosStockReventa;