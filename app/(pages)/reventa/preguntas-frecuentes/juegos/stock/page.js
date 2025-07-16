
import {
    AlertCircle,
    Box,
    CheckCircle,
    Clock,
    CreditCard,
    Joystick,
    TimerIcon
} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import React from "react";
import {Alert, AlertDescription} from "@/components/ui/alert";

function InformacionJuegosOferta() {
    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 lg:w-7/12 mx-auto px-2 pt-20"}>

            <h2 className="mt-4 text-2xl font-bold mb-2 text-center">Información juegos digitales (reventa)</h2>

            {/* Información Específica del Negocio */}
            <div className="space-y-4 pt-4">
                {/* Información de Transferencia */}
                <Card className="border-green-200 bg-blue-50">
                    <CardContent className="p-4">
                        <div className="flex flex-col items-start gap-3">
                            <div className={"flex gap-2"}>
                                <Joystick className="h-5 w-5 text-blue-600 mt-0.5"/>
                                <h3 className="font-semibold text-blue-800 mb-1">Compatibilidad</h3>
                            </div>
                            <div>
                                <p className="text-sm text-blue-700">
                                    Nuestros juegos son compatibles con consolas PS4 Y PS5. La consola debe
                                    estar original, es decir sin ningun &apos;chipeo&apos;, &apos;desbloqueo&apos;
                                    o similar.
                                    <strong> Nuestra garantía no cubre si la consola no cumple estos requisitos.</strong>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Información de Transferencia */}
                <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                        <div className="flex flex-col items-start gap-3">
                            <div className={"flex gap-2"}>
                                <TimerIcon className="h-5 w-5 text-green-600 mt-0.5"/>
                                <h3 className="font-semibold text-green-800 mb-1">Envios y tiempos de entrega</h3>
                            </div>
                            <div>
                                <p className="text-sm text-green-700">
                                    Se entrega
                                    <strong> usuario y contraseña </strong>
                                    junto con el
                                    <strong> instructivo de instalación </strong>.
                                    Se envia por correo electrónico
                                    <strong> si o si </strong>
                                    para mantener un registro inborrable de la entrega.
                                    El tiempo de entrega de los juegos de stock es inmediata. Se avisa si hay demora.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Información de Cuentas */}
                <Card className="border-blue-200 bg-red-50">
                    <CardContent className="p-4">
                        <div className="flex flex-col items-start gap-3">
                            <div className={"flex gap-2"}>
                                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5"/>
                                <h3 className="font-semibold text-red-800 mb-1">Importante revendedores</h3>
                            </div>
                            <div>
                                <p className="text-sm text-red-700">
                                    El juego no se puede revender una vez instalado en la consola del cliente.
                                    Tampoco se puede instalar el usuario en varias consolas, cambiar datos ni
                                    acceder desde un dispositivo externo.
                                    Si se rompen estos términos
                                    <strong> la garantía queda anualada sin derecho a reclamo</strong>.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Información de Cuentas */}
                <Card className="border-blue-200 bg-yellow-50">
                    <CardContent className="p-4">
                        <div className="flex flex-col items-start gap-3">
                            <div className={"flex gap-2"}>
                                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5"/>
                                <h3 className="font-semibold text-yellow-800 mb-1">Problemas de consola</h3>
                            </div>
                            <div>
                                <p className="text-sm text-yellow-700">
                                    Nuestra garantía, por razones lógicas, no cubre problemas que el cliente
                                    tenga con la consola. Un mal mantenimiento o un mal uso no es nuestra
                                    responsabilidad.
                                    Nosotros garantizamos acceso al usuario, no el funcionamiento de la consola.
                                    En caso de que se haya tenido que resetear de fábrica sin haber realizado la
                                    configuración necesaria para eliminar del usuario de manera correcta, no abarca
                                    la garantía que brindamos. Una consola bien mantenida y usada, no causa problemas.
                                    Los problemas de servidores de Sony, tampoco corren por nuestra cuenta ya que no
                                    está a nuestro alcance corregir este aspecto. Si brindamos soporte sobre que se
                                    puede hacer mientras tanto o información al respecto.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">

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
                                <CheckCircle className="h-4 w-4 text-green-600"/>
                                <span className="text-sm">Garantía</span>
                            </div>
                            <Badge variant="secondary">Ilimitada</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className={"flex gap-2"}>
                                <CheckCircle className="h-4 w-4 text-green-600"/>
                                <span className="text-sm">Soporte técnico personalizado</span>
                            </div>
                            <Badge variant="secondary">Todos los días</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className={"flex gap-2"}>
                                <CheckCircle className="h-4 w-4 text-green-600"/>
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
        </main>
    )
}

export default InformacionJuegosOferta