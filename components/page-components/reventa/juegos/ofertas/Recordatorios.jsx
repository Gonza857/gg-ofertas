import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Box, Clock, Gamepad2, Scroll} from "lucide-react";
import Link from "next/link";

function Recordatorios () {
    return (
        <div className="w-full bg-white shadow-lg border rounded-lg p-4 mb-2 lg:mb-6 lg:w-3/4 mx-auto">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-semibold">Información Importante</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start">
                                <Gamepad2 className="w-6 h-6 mr-2 text-blue-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="font-semibold mb-2">Compatibilidad</h3>
                                    <p className="text-gray-600">
                                        Los juegos son compatibles con PS4 y PS5 originales (sin
                                        chipear/desbloquear).
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="font-semibold mb-2">Tiempo de Entrega</h3>
                                    <p className="text-gray-600">
                                        Las entregas se realizan en unos 5 a 30 minutos una vez realizado el pago. Si hay demora, será notificado previamente.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Box className="w-6 h-6 mr-2 text-purple-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="font-semibold mb-2">Envío</h3>
                                    <p className="text-gray-600">
                                        Se envía un usuario y contraseña junto con el instructivo de instalación para
                                        seguir los pasos y
                                        poder descargar el juego en la consola.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Scroll className="w-6 h-6 mr-2 text-green-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="font-semibold mb-2">Garantía</h3>
                                    <p className="text-gray-600">
                                        Nuestros productos son 100% originales y con licencias oficiales. La garantía
                                        es ilimitada siempre y en cuando no se violen los términos y condiciones. {" "}
                                        <Link
                                            href={"/preguntas-frecuentes"}
                                            className={"underline cursor-pointer"}
                                        >
                                            Click para ver.
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Recordatorios;