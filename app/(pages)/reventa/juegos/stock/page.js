import {Box, Clock, Gamepad2, Scroll} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {obtenerJuegosStock} from "@/dominio/servicios/juegos";
import TablaJuegosStock from "@/components/page-components/reventa/TablaJuegosStock";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Garret Games",
    description: "Listado de juegos en stock para revendedores",
};

async function StockJuegos() {
    const juegos = await obtenerJuegosStock()
    return (
        <main className={"styledMain py-4"}>
            <article className={"w-full sm:w-11/12 md:w-10/12 xl:w-3/4 mx-auto p-2 md:p-0"}>
                <h1 className="text-xl md:text-3xl font-bold text-center mb-4">
                    Juegos en stock PS4 & PS5
                </h1>
                <Recordatorios/>
                <TablaJuegosStock juegos={juegos} cliente={false}/>
            </article>
        </main>
    )
}

const Recordatorios = () => {
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
                                        Las membresías son compatibles con PS4 y PS5 originales (sin
                                        chipear/desbloquear).
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Clock className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="font-semibold mb-2">Tiempo de Entrega</h3>
                                    <p className="text-gray-600">
                                        Las entregas se realizan en unos 5 a 30 minutos una vez realizado el pago.
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
                                        poder activar la membresía en la consola.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Scroll className="w-6 h-6 mr-2 text-green-500 flex-shrink-0 mt-1"/>
                                <div>
                                    <h3 className="font-semibold mb-2">Garantía</h3>
                                    <p className="text-gray-600">
                                        Nuestros productos son 100% originales y con licencias oficiales. La garantía
                                        abarca el tiempo
                                        adquirido y garantiza el acceso al usuario.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <p className={"mt-4 text-sm text-neutral-500 dark:text-neutral-400 text-center"}>¡Podes copiar al portapeles el producto que desees y enviarnos un mensaje!</p>
        </div>
    )
}

export default StockJuegos

