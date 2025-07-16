import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AlertCircle, Clock, CreditCard, Info} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

function InformacionJuegosStockReventa () {
    return (
        <div className={"space-y-4"}>
            {/*<Alert className="border-red-200 bg-red-50">*/}
            {/*    <Clock className="h-4 w-4"/>*/}
            {/*    <AlertTitle className="text-red-800 flex items-center gap-2">*/}
            {/*        🔥 ¡Juegos en Oferta!*/}
            {/*        <Badge variant="destructive" className="animate-pulse">*/}
            {/*            Hasta 16/07/25 19:00Hs*/}
            {/*        </Badge>*/}
            {/*    </AlertTitle>*/}
            {/*    <AlertDescription className="text-red-700">*/}
            {/*        Aprovecha los precios especiales antes de que termine la promoción*/}
            {/*    </AlertDescription>*/}
            {/*</Alert>*/}

            <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-blue-800 mb-1">📋 Información de precios</h3>
                            <p className="text-sm text-blue-700">
                                Si el juego publicado esta de oferta
                                <strong>se toma el precio de oferta</strong>.
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
                <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-green-700">
                            <Clock className="h-5 w-5"/>
                            Beneficios
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Garantía</span>
                            <Badge variant="secondary">12 meses</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Soporte técnico personalizado</span>
                            <Badge variant="secondary">Todos los días</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Juegos y licencias</span>
                            <Badge variant="secondary">Originales y oficiales</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-blue-700">
                            <CreditCard className="h-5 w-5"/>
                            Precios
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Precio lista</span>
                            <Badge variant="secondary">Hasta 3 cuotas sin interés</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Precio transferencia</span>
                            <Badge variant="secondary" className={"bg-blue-600 text-white"}>20% OFF Abonando por
                                CVU/CBU</Badge>
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

export default InformacionJuegosStockReventa;