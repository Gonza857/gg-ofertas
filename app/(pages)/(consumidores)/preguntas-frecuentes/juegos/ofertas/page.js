import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle, CheckCircle, Clock, CreditCard, Gift, Info} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

function InformacionJuegosOferta () {
    return (
        <main className={"styledMain"}>

            {/* Información Específica del Negocio */}
            <div className="space-y-4">
                {/* Banner de Oferta con Countdown */}
                <Alert className="border-red-200 bg-red-50">
                    <Clock className="h-4 w-4" />
                    <AlertTitle className="text-red-800 flex items-center gap-2">
                        🔥 ¡Juegos en Oferta!
                        <Badge variant="destructive" className="animate-pulse">
                            Hasta 16/07/25 19:00Hs
                        </Badge>
                    </AlertTitle>
                    <AlertDescription className="text-red-700">
                        Aprovecha los precios especiales antes de que termine la promoción
                    </AlertDescription>
                </Alert>

                {/* Información de Transferencia */}
                <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                            <CreditCard className="h-5 w-5 text-green-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-green-800 mb-1">💰 Precio por Transferencia</h3>
                                <p className="text-sm text-green-700">
                                    Los precios mostrados son abonando por <strong>transferencia bancaria CVU/CBU</strong>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Información de Cuentas */}
                <Card className="border-blue-200 bg-blue-50">
                    <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-blue-800 mb-1">📋 Información de Stock</h3>
                                <p className="text-sm text-blue-700">
                                    El precio publicado es en <strong>cuenta primaria</strong>. Por cuenta secundaria{" "}
                                    <strong>consultar stock</strong> disponible.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Alert className="border-yellow-200 bg-yellow-50">
                <Info className="h-4 w-4" />
                <AlertTitle className="text-yellow-800">Información importante</AlertTitle>
                <AlertDescription className="text-yellow-700">
                    Más información sobre tiempos de entrega, envio, garantía y compatibilidad. Click aqui
                </AlertDescription>
            </Alert>

            <Card className="border-l-4 border-l-blue-500 w-4/12">
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Clock className="h-5 w-5" />
                        Tiempos de Entrega
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm">📍 Capital Federal</span>
                        <Badge variant="secondary">24 horas</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm">🏙️ Gran Buenos Aires</span>
                        <Badge variant="secondary">48 horas</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm">🌎 Interior del país</span>
                        <Badge variant="secondary">3-5 días</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 w-4/12">
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-green-700">
                        <CreditCard className="h-5 w-5" />
                        Formas de Pago
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600"/>
                        <span className="text-sm">Transferencia bancaria</span>
                        <Badge variant="outline" className="text-xs text-white bg-green-600">
                            20% OFF
                        </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600"/>
                        <span className="text-sm">Cuotas sin interés (crédito y débito)</span>
                        <Badge variant="outline" className="text-xs">
                            Hasta 3x
                        </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600"/>
                        <span className="text-sm">Criptomonedas</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600"/>
                        <span className="text-sm">Efectivo rapipago-pagofacil</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600"/>
                        <span className="text-sm">MercadoPago, NaranjaX, Cuenta DNI, Uala, Brubank, etc</span>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}

export default InformacionJuegosOferta