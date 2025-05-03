"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {registrarUsuario} from "@/dominio/utils/auth/auth";

const handleSubmit = async (e, setMensaje) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const {mensaje, exito} = await registrarUsuario(data);
    exito ? setMensaje({mensaje}) : setMensaje({mensaje, exito})
};


function SignIn () {
    const [verContrasena, setVerContrasena] = useState(false)
    // const [verConfirmacion, setVerConfirmacion] = useState(false)
    const [mensaje, setMensaje] = useState("")

    const manejarVerContrasena = () => {
        setVerContrasena(!verContrasena)
    }

    // const manejarVerConfirmacion = () => {
    //     setVerConfirmacion(!verConfirmacion)
    // }


    return (
        <main className="styledMain flex justify-center items-center">
            <article className="w-full px-1 md:px-0 sm:w-3/4 md:w-1/2 lg:w-4/12 mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Crear cuenta</CardTitle>
                        <CardDescription>Regístrate para acceder a la plataforma</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e, setMensaje)}
                              method="POST">
                            <div className="space-y-2">
                                <Label htmlFor="email">Correo Electrónico</Label>
                                <Input id="email" type="email" placeholder="tu@ejemplo.com" name="email" required/>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Contraseña</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={verContrasena ? "text" : "password"}
                                        placeholder="••••••••"
                                        name="contrasena"
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={manejarVerContrasena}
                                    >
                                        {verContrasena ? (
                                            <EyeOff className="h-4 w-4 text-gray-500"/>
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-500"/>
                                        )}
                                        <span
                                            className="sr-only">{verContrasena ? "Ocultar contraseña" : "Mostrar contraseña"}</span>
                                    </Button>
                                </div>
                            </div>

                            {/*<div className="space-y-2">*/}
                            {/*    <Label htmlFor="confirmarPassword">Confirmar Contraseña</Label>*/}
                            {/*    <div className="relative">*/}
                            {/*        <Input*/}
                            {/*            id="confirmarPassword"*/}
                            {/*            type={verConfirmacion ? "text" : "password"}*/}
                            {/*            placeholder="••••••••"*/}
                            {/*            name="confirmarContrasena"*/}
                            {/*            required*/}
                            {/*        />*/}
                            {/*        <Button*/}
                            {/*            type="button"*/}
                            {/*            variant="ghost"*/}
                            {/*            size="sm"*/}
                            {/*            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"*/}
                            {/*            onClick={manejarVerConfirmacion}*/}
                            {/*        >*/}
                            {/*            {verConfirmacion ? (*/}
                            {/*                <EyeOff className="h-4 w-4 text-gray-500"/>*/}
                            {/*            ) : (*/}
                            {/*                <Eye className="h-4 w-4 text-gray-500"/>*/}
                            {/*            )}*/}
                            {/*            <span*/}
                            {/*                className="sr-only">{verConfirmacion ? "Ocultar contraseña" : "Mostrar contraseña"}</span>*/}
                            {/*        </Button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <input type="hidden" value="registro" name="action"/>

                            <p className={mensaje.success ? "text-green-600" : "text-red-600"}>{mensaje.mensaje}</p>

                            <Button type="submit" className="w-full">
                                Registrarse
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-center w-full">
                            ¿Ya tienes una cuenta?{" "}
                            <Link href="/login" className="text-primary hover:underline font-semibold">
                                Inicia sesión aquí
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </article>
        </main>
    );
}


export default SignIn;
