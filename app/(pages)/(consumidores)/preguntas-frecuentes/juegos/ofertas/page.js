import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle, CheckCircle, Clock, CreditCard, Gift, Info, Joystick, TimerIcon} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import React from "react";

function InformacionJuegosOferta () {
    return (
        <main className={"styledMain w-full sm:w-11/12 md:w-9/12 lg:w-7/12 mx-auto px-2 pt-20"}>

            <h2 className="mt-4 text-2xl font-bold mb-2 text-center">Información juegos digitales</h2>

            {/* Información Específica del Negocio */}
            <div className="space-y-4">

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
                                    <strong> Nuestra garantía no cubre si la consola no cumple estos
                                        requisitos.</strong>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Información de envios/entrega */}
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
                                    El tiempo de entrega de los juegos de oferta demora entre 5 a 30 minutos.
                                    Se notifica si hay demora.
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
                                <h3 className="font-semibold text-red-800 mb-1">Importante</h3>
                            </div>
                            <div>
                                <p className="text-sm text-red-700">
                                    El juego no se puede revender una vez instalado en la consola.
                                    El usuario enviado es
                                    <strong> unicamente para 1 consola</strong>.
                                    Es decir que
                                    <strong> no se puede instalar en otra consola</strong>.
                                    No esta permitido cambiar datos del usuario ni
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
                                <h3 className="font-semibold text-yellow-800 mb-1">Excepciones</h3>
                            </div>
                            <div>
                                <p className="text-sm text-yellow-700">
                                    Por favor comunicarse si tiene dudas antes de realizar alguna
                                    acción en lo que respecta al usuario que enviamos. Podemos considerar
                                    dar garantía en casos aislados y excepcionales para que pueda
                                    mantener su juego. Agradecemos su modestia al consultarnos y despejar dudas
                                    previo a hacer cualquier acción que involucre nuestros usuarios.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>

        </main>
)
}

export default InformacionJuegosOferta