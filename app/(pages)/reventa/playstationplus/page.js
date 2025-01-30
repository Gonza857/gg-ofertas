import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Box, Clock, Gamepad2, Gift, Scroll, Zap} from "lucide-react";

const diccionarioTipos = {
    0: "bg-gray-300 text-black",
    1: "bg-yellow-500 text-black",
    2: "bg-gray-800 text-yellow-500"
}

const subscriptions = [
    {
        tipo: "Essential",
        duracion: 1,
        precio: 8800,
        caracteristicas: ["Juegos mensuales", "Multijugador online", "Descuentos exclusivos"],
        badgeStyle: diccionarioTipos[0]

    },
    {
        tipo: "Essential",
        duracion: 3,
        precio: 16500,
        caracteristicas: ["Juegos mensuales", "Multijugador online", "Descuentos exclusivos"],
        badgeStyle: diccionarioTipos[0]

    },
    {
        tipo: "Essential",
        duracion: 12,
        precio: 38500,
        caracteristicas: ["Juegos mensuales", "Multijugador online", "Descuentos exclusivos"],
        badgeStyle: diccionarioTipos[0]

    },
    {
        tipo: "Extra",
        duracion: 1,
        precio: 11500,
        caracteristicas: ["Beneficios de Essential", "Catálogo de juegos", "Pruebas de juegos"],
        badgeStyle: diccionarioTipos[1]

    },
    {
        tipo: "Extra",
        duracion: 3,
        precio: 27500,
        caracteristicas: ["Beneficios de Essential", "Catálogo de juegos", "Pruebas de juegos"],
        badgeStyle: diccionarioTipos[1]

    },
    {
        tipo: "Extra",
        duracion: 12,
        precio: 55000,
        caracteristicas: ["Beneficios de Essential", "Catálogo de juegos", "Pruebas de juegos"],
        badgeStyle: diccionarioTipos[1]

    },
    {
        tipo: "Deluxe",
        duracion: 1,
        precio: 14800,
        caracteristicas: ["Beneficios de Extra", "Clásicos", "Pruebas extendidas"],
        badgeStyle: diccionarioTipos[2]

    },
    {
        tipo: "Deluxe",
        duracion: 3,
        precio: 33000,
        caracteristicas: ["Beneficios de Extra", "Clásicos", "Pruebas extendidas"],
        badgeStyle: diccionarioTipos[2]

    },
    {
        tipo: "Deluxe",
        duracion: 12,
        precio: 71500,
        caracteristicas: ["Beneficios de Extra", "Clásicos", "Pruebas extendidas"],
        badgeStyle: diccionarioTipos[2]

    },
]

function SubscripcionPlus() {
    return (
        <main className={"styledMain pt-4"}>
            <article className={"w-full p-1 md:p-0 md:w-10/12 mx-auto"}>
                <h1 className="text-xl md:text-3xl font-bold text-center mb-4">Subscripciones PlayStation Plus
                    PS4 & PS5</h1>
                <div className="w-full bg-white shadow-lg rounded-lg p-6 mb-8 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Información Importante</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <Gamepad2 className="w-6 h-6 mr-2 text-blue-500 flex-shrink-0 mt-1"/>
                            <div>
                                <h3 className="font-semibold mb-2">Compatibilidad</h3>
                                <p className="text-gray-600">
                                    Las membresías son compatibles con PS4 y PS5 originales (sin chipear/desbloquear).
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Clock className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0 mt-1"/>
                            <div>
                                <h3 className="font-semibold mb-2">Tiempo de Entrega</h3>
                                <p className="text-gray-600">
                                    Las entregas se realizan de 08:00 a 17:30. Compras realizadas fuera de este horario se entregan al día siguiente.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Box className="w-6 h-6 mr-2 text-purple-500 flex-shrink-0 mt-1"/>
                            <div>
                                <h3 className="font-semibold mb-2">Envío</h3>
                                <p className="text-gray-600">
                                    Se envía un usuario y contraseña junto con el instructivo de instalación para seguir los pasos y poder activar la membresía en la consola.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Scroll className="w-6 h-6 mr-2 text-green-500 flex-shrink-0 mt-1"/>
                            <div>
                                <h3 className="font-semibold mb-2">Garantía</h3>
                                <p className="text-gray-600">
                                    Nuestros productos son 100% originales y con licencias oficiales. La garantía abarca el tiempo adquirido y garantiza el acceso al usuario
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subscriptions.map((sub, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-2xl font-bold">{sub.tipo}</CardTitle>
                                    <Badge className={`${sub.badgeStyle}`}>
                                        {sub.duracion} {sub.duracion === 1 ? "mes" : "meses"}
                                    </Badge>
                                </div>
                                <CardDescription>Subscripción PlayStation Plus</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-3xl font-bold mb-4">${sub.precio.toLocaleString("es-AR")}</p>
                                <ul className="list-disc list-inside space-y-2">
                                    {sub.caracteristicas.map((feature, fIndex) => (
                                        <li key={fIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </article>
        </main>
    )
}

export default SubscripcionPlus