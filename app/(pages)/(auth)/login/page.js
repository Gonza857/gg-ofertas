"use client"

import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Eye, EyeOff} from "lucide-react";
import {loguearUsuario} from "@/dominio/utils/auth/auth";

const inputStyle = 'block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500';

const Login = () => {
    const [mensaje, setMensaje] = useState({});
    const router = useRouter();
    const [verContrasena, setVerContrasena] = useState(false)

    const handleSubmit = async (e, setMensaje) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const {mensaje, exito} = await loguearUsuario(data)
        if (exito) {
            setMensaje(mensaje);
            router.replace('/admin');
        } else {
            setMensaje({mensaje, exito})
        }
    };

    const manejarVerContrasena = () => setVerContrasena(!verContrasena)

    return (
        <main className="styledMain flex justify-center items-center">
            <article className="w-full px-1 md:px-0 sm:w-3/4 md:w-1/2 lg:w-4/12 mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Iniciar sesión</CardTitle>
                        <CardDescription>Ingresa tus credenciales para acceder a tu cuenta</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            className={'flex flex-col gap-4'}
                            onSubmit={(e) => handleSubmit(e, setMensaje)}
                            method="POST">
                            <div className="space-y-2">
                                <Label htmlFor="email">Correo Electrónico</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="tu@ejemplo.com"
                                    name={"email"}
                                    required/>
                            </div>
                            <input type="hidden" value="login" name="action"/>
                            <p className={mensaje.success ? 'text-green-600' : 'text-red-600'}>
                                {mensaje.mensaje}
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Contraseña</Label>
                                    <Link href="/recuperar-contrasena" className="text-sm text-primary hover:underline">
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Input id="password"
                                           type={verContrasena ? "text" : "password"}
                                           placeholder="••••••••"
                                           name={"contrasena"}
                                           required/>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => manejarVerContrasena()}
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
                            <Button type="submit" className="w-full">
                                Iniciar Sesión
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-center w-full">
                            ¿No tienes una cuenta?{" "}
                            <Link href="/signin" className="text-primary hover:underline font-semibold">
                                Regístrate aquí
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </article>
        </main>
    )
}

export default Login