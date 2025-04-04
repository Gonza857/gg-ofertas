import React from "react";
import Image from "next/image";
import {AiFillCreditCard} from "react-icons/ai";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Box, Check, Clock, Gamepad2, Info, Scroll} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";

const diccionarioTipos = {
    0: "bg-gray-300 text-black",
    1: "bg-yellow-500 text-black",
    2: "bg-zinc-800 text-yellow-500"
}

const ganancia = 1.20;
const comisionCuotas = 0.2;

const subscriptions = [
    {
        tipo: "Essential",
        duracion: 1,
        precio: 8800,
        precioCuotas: 8800 + (8800 * 0.2),
        caracteristicas: ["Juegos mensuales", "Multijugador online"],
        badgeStyle: diccionarioTipos[0]

    },
    {
        tipo: "Essential",
        duracion: 3,
        precio: 15400,
        precioCuotas: 15400 + (15400 * 0.2),
        caracteristicas: ["Juegos mensuales", "Multijugador online"],
        badgeStyle: diccionarioTipos[0]

    },
    {
        tipo: "Essential",
        duracion: 12,
        precio: 38500,
        precioCuotas: 38500 + (38500 * 0.2),
        caracteristicas: ["Juegos mensuales", "Multijugador online"],
        badgeStyle: diccionarioTipos[0]

    },
    {
        tipo: "Extra",
        duracion: 1,
        precio: 11500,
        precioCuotas: 11500 + (11500 * 0.2),
        caracteristicas: ["Beneficios de Essential", "Catálogo de juegos", "Pruebas de juegos"],
        badgeStyle: diccionarioTipos[1]

    },
    {
        tipo: "Extra",
        duracion: 3,
        precio: 26400,
        precioCuotas: 26400 + (26400 * 0.2),
        caracteristicas: ["Beneficios de Essential", "Catálogo de juegos", "Pruebas de juegos"],
        badgeStyle: diccionarioTipos[1]

    },
    {
        tipo: "Extra",
        duracion: 12,
        precio: 49500,
        precioCuotas: 49500 + (49500 * 0.2),
        caracteristicas: ["Beneficios de Essential", "Catálogo de juegos", "Pruebas de juegos"],
        badgeStyle: diccionarioTipos[1]

    },
    {
        tipo: "Deluxe",
        duracion: 1,
        precio: 14800,
        precioCuotas: 14800 + (14800 * 0.2),
        caracteristicas: ["Beneficios de Extra", "Clásicos", "Pruebas extendidas"],
        badgeStyle: diccionarioTipos[2]

    },
    {
        tipo: "Deluxe",
        duracion: 3,
        precio: 30800,
        precioCuotas: 30800 + (30800 * 0.2),
        caracteristicas: ["Beneficios de Extra", "Clásicos", "Pruebas extendidas"],
        badgeStyle: diccionarioTipos[2]

    },
    {
        tipo: "Deluxe",
        duracion: 12,
        precio: 66000,
        precioCuotas: 66000 + (66000 * 0.2),
        caracteristicas: ["Beneficios de Extra", "Clásicos", "Pruebas extendidas"],
        badgeStyle: diccionarioTipos[2]

    },
]

const SubscripcionCard = ({sub}) => {
    const mensaje = `Me interesa PlayStation Plus ${sub.tipo} por ${sub.duracion} ${sub.duracion === 1 ? "mes" : "meses"}.`
    return (
        <>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className={`w-full py-3 ${sub.badgeStyle} font-bold text-xl rounded-xl`}>
                            {sub.tipo}
                        </div>
                        <div className="text-3xl font-bold">
                            ${sub.precioCuotas.toFixed(0)} / {sub.duracion} {sub.duracion === 1 ? "mes" : "meses"}
                        </div>
                        <div className="space-y-2 text-sm">
                            <p>
                                <span className="font-semibold">Precio en cuotas:</span>
                                <br/>3 pagos de ${(sub.precioCuotas / 3).toFixed(2)}
                            </p>
                            <p>
                                <span className="font-semibold">Precio con transferencia:</span>
                                <br/>${(sub.precio).toFixed(0)} (20% de descuento)
                            </p>
                        </div>
                        <ul className="text-left space-y-2">
                            {sub.caracteristicas.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className={"flex gap-4"}>
                            <Badge variant="outline" className="bg-gray-100">
                                <Clock className="h-4 w-4 mr-1"/>
                                Duración: {sub.duracion} {sub.duracion === 1 ? "mes" : "meses"}
                            </Badge>
                            <Badge variant="outline" className="bg-emerald-100">
                                <Gamepad2 className="h-4 w-4 mr-1"/>
                                PS4 & PS5
                            </Badge>
                        </div>
                        <Link
                            href={`https://wa.me/5491132001372?text=${mensaje}`}
                            className={"w-full"}
                            target={"_blank"}
                        >
                            <Button className="w-full">
                                <FaWhatsapp/>
                                Me interesa
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

const PlayStationPlusSSS = () => {
    return (
        <main className="styledMain py-8 px-4">
            <article className={"w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto"}>
                <h1 className="text-4xl font-bold text-center mb-8">Subscripciones PlayStation Plus</h1>
                <div className="w-full bg-white shadow-xl rounded-xl border p-6 mb-8 max-w-4xl mx-auto">
                    <h2 className="text-xl italic font-semibold mb-4 text-center">Información Importante</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
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
                                    Las entregas se realizan de 08:00 a 17:30. Compras realizadas fuera de este
                                    horario se entregan al día siguiente.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Box className="w-6 h-6 mr-2 text-purple-500 flex-shrink-0 mt-1"/>
                            <div>
                                <h3 className="font-semibold mb-2">Envío</h3>
                                <p className="text-gray-600">
                                    Se envía un usuario y contraseña junto con el instructivo de instalación para
                                    seguir los pasos y poder activar la membresía en la consola.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Scroll className="w-6 h-6 mr-2 text-green-500 flex-shrink-0 mt-1"/>
                            <div>
                                <h3 className="font-semibold mb-2">Garantía</h3>
                                <p className="text-gray-600">
                                    Nuestros productos son 100% originales y con licencias oficiales. La garantía
                                    abarca el tiempo adquirido y garantiza el acceso al usuario.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className={"mt-4 text-sm text-neutral-500 dark:text-neutral-400 text-center"}>Atentamente, Garret
                        Games</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subscriptions.map((sub, index) => (
                        <SubscripcionCard sub={sub} key={index}/>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Badge variant="outline" className="text-sm px-4 py-2">
                        Todos los planes incluyen acceso a PlayStation Plus
                    </Badge>
                </div>
            </article>
        </main>
    )
}

export default PlayStationPlusSSS;


const PlusTr = ({data}) => {
    const {id, title, bt_price, cc_price} = data;

    let bg;
    if (title.toLowerCase().includes("essential")) bg = "bg-gray-200 text-black"
    if (title.toLowerCase().includes("extra")) bg = "bg-yellow-500 text-black"
    if (title.toLowerCase().includes("deluxe")) bg = "bg-black text-white"

    return (<>
        <tr
            className="border-b border-gray-200"
            key={id}
        >
            <td className={`text-sm py-2 px-2 md:py-2 md:px-4 ${bg}`}>
                {title}
            </td>
            <td className={`text-sm py-2 px-2 md:py-2 md:px-4 text-black text-center ${bg}`}>
                ${cc_price.toFixed(0)}
            </td>
            <td className={`text-sm py-2 px-2 md:py-2 md:px-4 text-black text-center ${bg}`}>
                ${bt_price}
            </td>
        </tr>
    </>)
}

