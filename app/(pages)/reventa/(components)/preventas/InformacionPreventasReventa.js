import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Box, Info, Joystick} from "lucide-react";
import Link from "next/link";
import React from "react";
import {Card, CardContent} from "@/components/ui/card";

function InformacionPreventasReventa() {
    return (
        <>
            <div className={"space-y-4 pb-4"}>

                <Card className="border-blue-200 bg-blue-50">
                    <CardContent className="p-4">
                        <div className="flex flex-col items-start gap-3">
                            <div className={"flex gap-2"}>
                                <Box className="h-5 w-5 text-blue-600 mt-0.5"/>
                                <h3 className="font-semibold text-blue-800 mb-1">Entrega</h3>
                            </div>
                            <div>
                                <p className="text-sm text-blue-700">
                                    La entrega de
                                    <strong> cuentas primarias </strong>
                                    se realiza al instante de haber abonado.
                                    El cliente puede instalar el usuario y activar la descarga automatica.
                                    El cliente podrá descargar el juego cuando Sony habilite su descarga.
                                    El cliente podrá jugar el dia que se lance el juego.
                                    La entre de
                                    <strong> cuentas secundarias </strong>
                                    se realiza previo al lanzamiento.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                        <div className="flex flex-col items-start gap-3">
                            <div className={"flex gap-2"}>
                                <Box className="h-5 w-5 text-green-600 mt-0.5"/>
                                <h3 className="font-semibold text-green-800 mb-1">Garantía</h3>
                            </div>
                            <div>
                                <p className="text-sm text-green-700">
                                    La garantía es
                                    <strong> ilimitada </strong>
                                    Siempre y en cuando el cliente no comparta la cuenta con otras personas y/o
                                    consolas. Tampoco debe cambiar los datos del usuario enviado ni acceder desde un
                                    dispositivo externo (celular o computador).
                                    Si el cliente cumple esto, no va a tener ningún problema.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </>
    )
}

export default InformacionPreventasReventa;